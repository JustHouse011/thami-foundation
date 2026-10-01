import { test, expect } from '@playwright/test';

const sections = ['advocacy', 'education', 'safe-spaces', 'empowerment', 'community'];

for (const width of [375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
  test(`Programmes layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/programmes');
    await expect(page).toHaveTitle('Programmes | Thami Dish Foundation');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText('Purpose');
    await expect(page.locator('main img')).toHaveCount(10);
    for (const img of await page.locator('main img').all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty('complete', true);
      expect(await img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
      await expect(img).not.toHaveAttribute('alt', '');
    }
    for (const section of await page.locator('main section').all()) {
      await section.scrollIntoViewIfNeeded();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    }
    if (width <= 430) {
      const positions = await page.locator('#advocacy').evaluate(section => {
        const selectors = ['.programme-heading', '.programme-photo', '.programme-body', '.programme-words'];
        return selectors.map(selector => section.querySelector(selector)!.getBoundingClientRect().top);
      });
      expect(positions).toEqual([...positions].sort((a, b) => a - b));
    }
    await expect(page.locator('footer')).toContainText('© 2026 Thami Dish Foundation | Developed by Bongani Nombamba');
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `docs/programmes-${width}.jpg`, fullPage: true, type: 'jpeg', quality: 75 });
  });
}

test('Programme index navigates all five sections below the header', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/programmes');
  const index = page.getByRole('navigation', { name: 'Programme index', exact: true });
  for (const id of sections) {
    await index.locator(`a[href="#${id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}-title`)).toBeInViewport();
    await expect.poll(() => page.locator(`#${id}`).evaluate(el => Math.round(el.getBoundingClientRect().top))).toBeGreaterThanOrEqual(80);
  }
  await page.goto('/programmes#safe-spaces');
  await expect(page.locator('#safe-spaces-title')).toBeInViewport();
});

test('Programmes route, active link, metadata and shared participation actions', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about');
  await page.locator('header').getByRole('link', { name: 'Programmes', exact: true }).click();
  await expect(page).toHaveURL(/\/programmes$/);
  await expect(page.locator('header').getByRole('link', { name: 'Programmes', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(page.locator('main')).toBeFocused();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /advocacy, education, safe spaces/);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /programmes-hero.webp/);
  for (const action of ['Donate', 'Partner', 'Volunteer']) {
    await page.locator('.programmes-involved').getByRole('button', { name: new RegExp(action) }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByLabel('Your name')).toBeVisible();
    await page.keyboard.press('Escape');
  }
  await page.locator('.programmes-involved-actions').getByRole('link', { name: 'Get involved' }).click();
  await expect(page).toHaveURL(/\/#get-involved$/);
  await expect(page.locator('#get-involved')).toBeInViewport({ ratio: 0.9 });
  await page.locator('footer').getByRole('link', { name: 'Programmes' }).click();
  await expect(page).toHaveURL(/\/programmes$/);
  await page.reload();
  await expect(page.locator('h1')).toContainText('in action.');
});

test('Mobile programme menu, anchor navigation and reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('dialog').getByRole('link', { name: '02 Programmes' }).click();
  await expect(page).toHaveURL(/\/programmes$/);
  await expect(page.getByRole('dialog')).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
  await page.getByRole('navigation', { name: 'Programme sections', exact: true }).getByRole('link', { name: '03 Safety' }).click();
  await expect(page.locator('#safe-spaces-title')).toBeInViewport();
  await expect(page.locator('.programme-safety-statement > div')).toHaveCount(0);
  await expect(page.locator('.programme-safety-statement')).toHaveCSS('opacity', '1');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(page.getByRole('dialog').getByRole('link', { name: '02 Programmes' })).toHaveAttribute('aria-current', 'page');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
});

test('Programme reveals finish when content enters the viewport', async ({ page }) => {
  await page.goto('/programmes');
  await expect(page.locator('h1 span').last()).toHaveCSS('opacity', '1');
  await page.locator('.programme-culture-words > div').last().scrollIntoViewIfNeeded();
  await expect(page.locator('.programme-culture-words > div').last()).toHaveCSS('opacity', '1');
  await page.locator('.programme-progression-stage').last().scrollIntoViewIfNeeded();
  await expect(page.locator('.programme-progression-stage').last()).toHaveCSS('opacity', '1');
});

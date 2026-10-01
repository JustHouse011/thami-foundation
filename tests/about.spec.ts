import { test, expect } from '@playwright/test';

for (const width of [375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
  test(`About layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/about');
    await expect(page).toHaveTitle('About | Thami Dish Foundation');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText('Born from courage.');
    await expect(page.locator('main section')).toHaveCount(11);
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
    await expect(page.getByRole('img', { name: /Temporary portrait placeholder/ })).toBeVisible();
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `docs/about-${width}.png`, fullPage: true });
  });
}

test('Desktop navigation, route focus, metadata and homepage anchors', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.locator('footer').scrollIntoViewIfNeeded();
  await page.locator('footer').getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page).toHaveTitle('About | Thami Dish Foundation');
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator('main')).toBeFocused();
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Learn about the Thami Dish Foundation/);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /about-hero.webp/);
  await page.getByRole('link', { name: 'This is our story' }).click();
  await expect(page).toHaveURL(/#our-story$/);
  await page.getByRole('link', { name: 'Get involved', exact: true }).last().click();
  await expect(page).toHaveURL(/\/#get-involved$/);
  await expect(page).toHaveTitle('Thami Dish Foundation | A Brighter, Braver Africa');
  // Near the document end the browser clamps scrolling; the section must be visible.
  await expect(page.locator('#get-involved')).toBeInViewport({ ratio: 0.9 });
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await page.locator('header').getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.reload();
  await expect(page.locator('h1')).toContainText('Built for belonging.');
});

test('About mobile menu, keyboard controls and existing donation flow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('dialog').getByRole('link', { name: '01 About' }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('dialog')).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
  await page.getByRole('button', { name: 'Open menu' }).click();
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => !!document.activeElement?.closest('dialog'))).toBeTruthy();
  }
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
  await page.locator('.about-cta').getByRole('button', { name: 'Donate' }).click();
  await expect(page.getByRole('dialog')).toContainText('no payment will be taken');
  await page.keyboard.press('Escape');
  await expect(page.locator('.about-cta').getByRole('button', { name: 'Donate' })).toBeFocused();
});

test('About motion reveals content and reduced motion keeps it visible', async ({ page }) => {
  await page.goto('/about');
  await expect(page.locator('.about-hero h1 span').first()).toHaveCSS('opacity', '1');
  await page.locator('.about-vision-words > div').last().scrollIntoViewIfNeeded();
  await expect(page.locator('.about-vision-words > div').last()).toHaveCSS('opacity', '1');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await expect(page.locator('.about-hero h1 span').first()).toHaveCSS('opacity', '1');
  await expect(page.locator('.about-hero-portrait')).toBeVisible();
  await expect(page.locator('.about-hero-portrait')).toHaveCSS('transition-duration', '0s');
});

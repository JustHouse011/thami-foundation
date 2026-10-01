import { test, expect } from '@playwright/test';

for (const width of [375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
  test(`Feather Awards responsive layout ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    await page.goto('/feather-awards');
    await expect(page).toHaveTitle('Feather Awards | Thami Dish Foundation');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveText('VISIBLE.FEARLESS.CELEBRATED.');
    await expect(page.locator('main section')).toHaveCount(15);
    await expect(page.locator('.editorial-image-placeholder')).toHaveCount(18);
    await expect(page.locator('main img')).toHaveCount(0);
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(0);
    for (const section of await page.locator('main section').all()) {
      await section.scrollIntoViewIfNeeded();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const heading = section.locator('h1,h2').first();
      const box = await heading.boundingBox();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
    }
    if (width < 700) {
      const tops = await page.locator('.feather-hero-layout').evaluate(el => ['.feather-hero-eyebrow', 'h1', '.feather-hero-photo', '.feather-hero-copy', '.feather-enter'].map(s => el.querySelector(s)!.getBoundingClientRect().top));
      expect(tops).toEqual([...tops].sort((a,b) => a-b));
    }
    await page.locator('footer').scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `docs/feather-awards-${width}.jpg`, fullPage: true, type: 'jpeg', quality: 70 });
  });
}

test('Feather Awards navigation, search, shared actions and metadata reset', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.locator('header').getByRole('link', { name: 'Feather Awards' }).click();
  await expect(page.locator('main')).toBeFocused();
  await expect(page.locator('header').getByRole('link', { name: 'Feather Awards' })).toHaveAttribute('aria-current', 'page');
  await page.getByRole('link', { name: 'Enter the Feathers' }).click();
  await expect(page.locator('#feather-intro-title')).toBeInViewport();
  await page.locator('.feather-actions').getByRole('button', { name: 'Support the Foundation' }).click();
  await expect(page.getByRole('dialog')).toContainText('no payment will be taken');
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Search the foundation' }).click();
  await page.getByRole('searchbox').fill('Feather');
  await page.getByRole('dialog').getByRole('link', { name: 'Feather Awards' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page).toHaveURL(/\/feather-awards$/);
  await page.locator('footer').getByRole('button', { name: 'Instagram', exact: true }).click();
  await expect(page.getByRole('dialog')).toContainText('verified social links');
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.locator('.feather-actions').getByRole('link', { name: 'Get involved' }).click();
  await expect(page).toHaveURL(/\/#get-involved$/);
  await expect(page.locator('#get-involved')).toBeInViewport();
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /hero-foundation/);
});

test('Mobile menu, keyboard, touch and motion preferences', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/feather-awards');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(page.locator('.heart-particle')).toHaveCount(4);
  await page.getByRole('dialog').getByRole('link', { name: /Feather Awards/ }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.getByRole('link', { name: 'Enter the Feathers' }).focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#more-than-a-night$/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(page.locator('.heart-particle')).toHaveCount(0);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
  await page.locator('.feather-manifesto').scrollIntoViewIfNeeded();
  await expect(page.locator('.feather-manifesto h2')).toBeVisible();
});

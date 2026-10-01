import { test, expect } from '@playwright/test';

const routes = ['/', '/about', '/programmes', '/impact', '/feather-awards'];
const targets = '.rainbow-border,.pill,.platform-card,.circle-outline,.circle-arrow';
for (const width of [375,390,430,768,1024,1280,1440,1920]) {
  test(`Prismatic edges preserve geometry across five pages at ${width}px`, async ({ page }) => {
    test.setTimeout(90000);
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const route of routes) {
      await page.goto(route);
      await page.locator('footer').scrollIntoViewIfNeeded();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const geometry = () => page.locator(targets).evaluateAll(elements => elements.map(el => {
        const r = el.getBoundingClientRect(); const css = getComputedStyle(el);
        return { width:r.width, height:r.height, radius:css.borderRadius, font:css.fontSize, padding:css.padding };
      }));
      const before = await geometry();
      // Disable only the edge stylesheet to prove decorations don't alter boxes or type.
      await page.evaluate(() => { document.querySelectorAll<HTMLElement>('.rainbow-border-light,.rainbow-border-shine').forEach(el => el.style.display = 'none'); for (const sheet of document.styleSheets) if (sheet.ownerNode instanceof Element && sheet.ownerNode.getAttribute('data-vite-dev-id')?.endsWith('prismatic-edge.css')) sheet.disabled = true; });
      expect(await geometry()).toEqual(before);
      await page.evaluate(() => { for (const sheet of document.styleSheets) sheet.disabled = false; document.querySelectorAll<HTMLElement>('.rainbow-border-light,.rainbow-border-shine').forEach(el => el.style.removeProperty('display')); });
      expect(await page.locator('main,header,footer,section').evaluateAll(elements => elements.every(el => !el.classList.contains('rainbow-border')))).toBe(true);
      const donate = page.locator('header .donate-button');
      await expect(donate).toHaveCSS('border-radius','99px');
      const edge = await donate.evaluate(el => ({ rainbow: getComputedStyle(el,'::before').animationName, glimmer: getComputedStyle(el,'::after').animationName, mask: getComputedStyle(el,'::before').maskComposite, events:getComputedStyle(el,'::after').pointerEvents }));
      expect(edge).toEqual({ rainbow:'none',glimmer:'none',mask:expect.stringContaining('exclude'),events:'none' });
    }
    expect(errors).toEqual([]);
  });
}

test('Spectrum and glimmer move independently without restarting on hover; surfaces stay clear', async ({ page }) => {
  await page.setViewportSize({ width:1440,height:1000 });
  await page.goto('/');
  const card = page.locator('.platform-card').first();
  await card.scrollIntoViewIfNeeded();
  const sample = () => card.evaluate(el => ({
    rainbow:parseFloat(getComputedStyle(el,'::before').getPropertyValue('--rainbow-angle')),
    glimmer:parseFloat(getComputedStyle(el,'::after').getPropertyValue('--glimmer-angle')),
    durations:[getComputedStyle(el,'::before').animationDuration,getComputedStyle(el,'::after').animationDuration],
    radius:getComputedStyle(el,'::before').borderRadius,
    mask:getComputedStyle(el,'::after').maskComposite,
    background:getComputedStyle(el).backgroundImage,
    clocks:el.getAnimations().filter(a => a instanceof CSSAnimation).map(a => ({ name:(a as CSSAnimation).animationName,time:a.currentTime as number })),
  }));
  const first = await sample();
  await page.waitForTimeout(850);
  const second = await sample();
  const rainbowDelta = (second.rainbow-first.rainbow+360)%360;
  const glimmerDelta = (second.glimmer-first.glimmer+360)%360;
  expect(rainbowDelta).toBeGreaterThan(20);
  expect(glimmerDelta).toBeGreaterThan(0);
  expect(second.glimmer).not.toBe(second.rainbow);
  expect(second.durations).toEqual(['8s','3.6s']);
  expect(second.mask).toContain('exclude');
  expect(second.background).not.toContain('conic');
  await card.hover();
  const hovered = await sample();
  for (const clock of second.clocks) expect(hovered.clocks.find(c=>c.name===clock.name)!.time).toBeGreaterThanOrEqual(clock.time);
  await page.screenshot({path:'docs/prismatic-home-desktop.png'});
  await card.screenshot({path:'docs/prismatic-card-frame-a.png',animations:'allow'});
  await page.waitForTimeout(1000);
  await card.screenshot({path:'docs/prismatic-card-frame-b.png',animations:'allow'});
  const donate=page.locator('header .donate-button');
  await donate.focus();
  await expect(donate).toHaveCSS('outline-style','solid');
  await expect(donate).toHaveCSS('background-color','rgb(8, 10, 10)');
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('.heart-particle').first()).toHaveCSS('font-size','52px');
  await page.keyboard.press('Escape');
  await expect(donate).toBeFocused();
  await page.goto('/feather-awards');
  await expect(page.locator('main .editorial-image.rainbow-border')).toHaveCount(2);
  await page.locator('.feather-recognition').scrollIntoViewIfNeeded();
  await page.screenshot({path:'docs/prismatic-feather-feature.png'});
});

test('No registered-property support leaves an intact static spectrum',async({page})=>{
  await page.goto('/');
  await page.evaluate(()=>document.documentElement.dataset.prismaticMotion='static');
  const button=page.locator('.donate-button');
  const state=await button.evaluate(el=>({animation:getComputedStyle(el,'::before').animationName,background:getComputedStyle(el,'::before').backgroundImage}));
  expect(state.animation).toBe('none');expect(state.background).toContain('conic-gradient');
  await button.click();await expect(page.getByRole('dialog')).toBeVisible();
});

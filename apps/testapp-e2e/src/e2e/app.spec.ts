import { test, expect } from '@playwright/test';

test('show that using injector', async ({ page }) => {
  await page.goto('/');

  const greeting = page.locator('h1');
  await expect(greeting).toContainText('Welcome testapp');
});

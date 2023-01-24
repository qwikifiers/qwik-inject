import { test, expect } from '@playwright/test';

test('show that using injector', async ({ page }) => {
  await page.goto('/');

  
  await page.getByText('Page 1').click();

  await page.getByText('Add Product').click();
  
  await page.getByText('Page 2').click();

  
  await expect(page.locator('li')).toContainText('Product 1');
  
});

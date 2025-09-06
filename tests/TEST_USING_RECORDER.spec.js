import { test, expect } from '@playwright/test';

test('Test Using Recorder', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('itsvishwa23');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('itsvishwa23');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
});
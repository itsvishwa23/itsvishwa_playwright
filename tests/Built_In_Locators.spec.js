import { test, expect } from "@playwright/test";

test("Built in Locators", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
    const logo= await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    const txt=await expect(page.getByText('OrangeHRM OS 5.7')).toBeVisible();
    await expect(txt).toBeVisible();

    await page
    .getByPlaceholder('Username')
    .fill('test@gmail.com');

    await page.getByRole('button', { name: 'Login' }).click();
    
    await page.close();
  
});

import { test, expect } from "@playwright/test";


test("Assertions", async ({ page }) => {
  
    await page.goto("https://demoblaze.com/index.html");
    const login='//a[@id="login2"]';
    const txt='//a[@id="cat"]';;

    await expect(page.locator(login)).toBeVisible();
    await expect(page.locator(txt)).toContainText('CATEGORIES');
    await page.close();
});

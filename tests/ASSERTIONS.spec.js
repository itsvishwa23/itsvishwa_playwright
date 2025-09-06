import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {
  
    await page.goto("https://demoblaze.com/index.html");
    const login='//a[@id="login2"]';

    await expect(page.locator(login)).toBeVisible();

    await page.close();
});

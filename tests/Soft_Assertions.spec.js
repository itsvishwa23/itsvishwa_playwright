import { test, expect } from "@playwright/test";
import { assert } from "console";

test("Soft Assertions", async ({ page }) => {
  
    await page.goto("https://demoblaze.com/index.html");
    const cat_div='//a[@id="cat"]';

    
    await expect.soft(page).toHaveTitle('Vishwanath')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    await expect(page.locator(cat_div)).toBeVisible();

    await page.close();
});

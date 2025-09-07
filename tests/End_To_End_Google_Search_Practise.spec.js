import { test, expect } from "@playwright/test";

test("End to End Google Search Practise", async ({ page }) => {
  await page.goto("https://www.google.com/");

  const search_box = "//textarea[@id='APjFqb']";
  const google_search_btn = "(//input[@name='btnK'])[2]";
  const verify = "(//span[text()='Playwright'])[1]";

  await expect(page.locator(search_box)).toBeVisible();
  await expect(page.locator(google_search_btn)).toBeVisible();

  await page.locator(search_box).fill("Playwright Automation");
  await page.locator(google_search_btn).click();

  page.waitForTimeout(3000);

  await page.locator(verify).isVisible();

  await page.close();
});

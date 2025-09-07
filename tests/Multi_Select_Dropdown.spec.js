import { test, expect } from "@playwright/test";

test("Multi Select Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com//");
  const drop_down= await page.locator('//*[@id="colors"]');

  await expect(drop_down).toBeVisible();
  await drop_down.selectOption(['Blue','Red']);
  await page.waitForTimeout(5000);

  await page.close();
});

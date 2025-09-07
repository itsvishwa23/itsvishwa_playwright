import { test, expect } from "@playwright/test";

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const name_text_box = "//input[@id='name']";
  const address_text_box = "//textarea[@id='textarea']";
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, "-");
  const screenshotPath = `E:\\itsvishwa_playwright\\screenshots\\screenshot_${timestamp}.png`;

  await expect(page.locator(name_text_box)).toBeVisible();
  await page.locator(name_text_box).scrollIntoViewIfNeeded();
  //   await page.locator(name_text_box).fill("Vishwa");
  await page.locator(name_text_box).click();
  await page.keyboard.type("Hello World!");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await expect(page.locator(address_text_box)).toBeVisible();
  await page.locator(address_text_box).scrollIntoViewIfNeeded();
  await page.locator(address_text_box).click();
  await page.keyboard.press("Control+V");
  await page.screenshot({ path: screenshotPath });

  await page.waitForTimeout(3000);
  await page.close();
});

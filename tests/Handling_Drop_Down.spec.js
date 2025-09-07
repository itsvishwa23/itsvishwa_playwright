import { test, expect } from "@playwright/test";

test("Handling Drop Down", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com//");
  const drop_down= await page.locator('//*[@id="country"]');

  await drop_down.selectOption({label:'India'});
  await page.waitForTimeout(5000);

  await drop_down.selectOption({value:'france'});
  await page.waitForTimeout(5000);


  await drop_down.selectOption({index:5});
  await page.waitForTimeout(5000);


  await page.close();
});

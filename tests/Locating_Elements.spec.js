import { test, expect } from "@playwright/test";

test("Locating Elements", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  var login_button = '//a[@id="login2"]';
  var username_input_box = '(//input[@type="text"])[4]';
  var password_input_box = '//input[@id="loginpassword"]';
  var login_button = '//button[@type="button" and text()="Log in"]';
  var logout = '//a[text()="Log out"]';

  //   await page.locator(login_button).click();
  await page.click("id=login2");
  await page.locator(username_input_box).fill("itsvishwa23");
  await page.locator(password_input_box).fill("itsvishwa23");
  await page.locator(login_button).click();
  await expect(page.locator(logout)).toBeVisible();
});

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.google.com/");

  var pageTitle = page.title;
  expect(pageTitle).toContain("Google");

  var pageURL = page.url();
  expect(pageURL).toContain("Google");
});

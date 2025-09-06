const { test, expect } = require("@playwright/test");
const { assert } = require("console");

test("Home Page", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
});

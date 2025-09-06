import { test, expect } from "@playwright/test";

test("Locating Elements", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  const element = await page.$$("a");

  for (const el of element) {
    const title = await el.textContent();
    console.log("Title:", title);
    const test = await page.getByPlaceholder("name@example.com");
    await expect(test).toBeVisible();

  }
});

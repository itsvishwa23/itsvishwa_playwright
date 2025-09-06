const { test, expect } = require("@playwright/test"); //async and await is used to maintain the promise as JS is async language

test("Home Page", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  //to display and validate page title
  var pageTitle = page.title();
  console.log("Page Title is", pageTitle);
  await expect(page).toHaveTitle("STORE");

  //to display and validate page URL
  var pageURL = page.url();
  console.log("Page URL is", pageURL);
  expect(pageURL).toContain("demoblaze");
  page.close();
});

//commands
//1. To Run all Test : npx playwright test
//2. To Run Specific Test : npx playwright test {your_test_name}

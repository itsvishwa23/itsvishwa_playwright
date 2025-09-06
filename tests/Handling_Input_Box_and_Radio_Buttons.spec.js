import { test, expect } from "@playwright/test";


test("Handling Input Box and Radio Button", async ({ page }) => {
  
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name_input_box='//input[@id="name"]';
    const email_input_box='//input[@id="email"]';
    const phone_input_box='//input[@placeholder="Enter Phone"]';

    //verify the visiblity of elements
    await expect(page.locator(name_input_box)).toBeVisible();
    await expect(page.locator(email_input_box)).toBeVisible();
    await expect(page.locator(phone_input_box)).toBeVisible();

    
    //add text into elements
    page.locator(name_input_box).fill('Vishwanath');
    page.locator(email_input_box).fill('testautomationpractice@gmail.com');
    page.locator(phone_input_box).fill('1234567890');

    // Check the checkbox
    await page.getByLabel('Sunday').check();

    // Assert the checked state
    expect(page.getByLabel('Sunday')).toBeChecked();

    // Select the radio button
    await page.getByLabel('Male',{exact:true}).check();
        
    await page.close();
});

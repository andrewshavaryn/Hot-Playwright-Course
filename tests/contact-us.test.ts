import { test, expect } from '@playwright/test';

test('user can submit contact us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('Andrii');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('playwrote@gmail.com');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('my first playwright test');
  await page.getByRole('button', { name: 'Submit' }).click();
});


test('user can Not submit contact us form with email that was used before', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('Andrii');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('playwrote@gmail.com');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('my first playwright test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(
    page.getByRole("heading", { name: "Please Try Again!" })
  ).toBeVisible();
  await expect(
    page.getByText("A request already existed for same email address")
  ).toBeVisible();
});
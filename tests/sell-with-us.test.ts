import { test, expect } from '@playwright/test';

test('User can submit wuth us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Andrew');
  await page
  .getByPlaceholder('Your Email Address')
  .fill(Date.now() + 'chelsea31@gmail.com');
  await page.getByPlaceholder('Your Phone Number').fill('1234123412');
  await page.getByPlaceholder('Your Business Brand').fill('Chelsea');
  await page.getByPlaceholder('Please Describe Your Business').fill('Chelsea Drons');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect (page.getByPlaceholder('Your Full Name')).toBeEmpty;
});
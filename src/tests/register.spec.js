import { test } from '@playwright/test';

const BASE_URL = 'http://localhost:5173';
const NAME = 'admin';
const EMAIL = 'juan@gmail.com';
const PHONENUMBER = '626423534';

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('Register', async ({ page }) => {
  await page.getByTestId('name').fill(NAME);
  await page.getByTestId('email').fill(EMAIL);
  await page.getByTestId('phonenumber').fill(PHONENUMBER);
  await page.getByRole('button', { name: 'Next →' }).click();
  await page.getByTestId('salary').click();
  await page.getByRole('button', { name: 'Finish →' }).click();
  await page.waitForSelector('.summary-title');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'src/tests/screenshots/summary.png' });
});

test('Register without name, email and phonenumber', async ({ page }) => {
  await page.getByRole('button', { name: 'Next →' }).click();
  await page.waitForSelector('.error-message');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'src/tests/screenshots/without-fields.png' });
});
test('Register without name', async ({ page }) => {
  await page.getByTestId('email').fill(EMAIL);
  await page.getByTestId('phonenumber').fill(PHONENUMBER);
  await page.getByRole('button', { name: 'Next →' }).click();
  await page.waitForSelector('.error-message');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'src/tests/screenshots/without-name.png' });
});

test('Register without salary', async ({ page }) => {
  await page.getByTestId('name').fill(NAME);
  await page.getByTestId('email').fill(EMAIL);
  await page.getByTestId('phonenumber').fill(PHONENUMBER);
  await page.getByRole('button', { name: 'Next →' }).click();
  await page.getByRole('button', { name: 'Finish →' }).click();
  await page.waitForSelector('.error-message');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'src/tests/screenshots/without-salary.png' });
});

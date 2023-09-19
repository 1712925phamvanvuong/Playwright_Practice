import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import {GenerateUtils} from '../utils/generateUtils';
import User from '../utils/user';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.describe('pageObject example', () => {
  let homePage: HomePage;
  let gen: GenerateUtils;
  let us : User;
  let arrayUser: User[];

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    gen = new GenerateUtils;
    await homePage.goto('https://playwright.dev/');
  });

  test('abc', async () => {
    await homePage.clickabc();
    // await homePage.verify(); -> eslint error for test must have expect
    await expect(homePage.heading).toBeVisible();
    us = gen.generateUser();
    console.log(us);
    arrayUser = gen.generateListOfUser(4);
    console.log(arrayUser)
    
  });
});

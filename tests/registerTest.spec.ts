import {test, expect, type Page} from '@playwright/test';
import PageRegister from '../pom/PageRegister.spec';

test.beforeEach(async ({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
});


test.describe('Test page register', () => {
    test('Test register user', async ({page}) => {
        const pageRegister = new PageRegister(page);
        await pageRegister.registerUser('test', 'user', 'abc@gmail.com', '09059999', '12345', true);
    })
})

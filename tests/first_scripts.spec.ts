import {test, expect, type Page} from '@playwright/test';
import PageLogin from '../pom/PageLogin.spec';
import PageRegister from '../pom/PageRegister.spec';

test.beforeEach(async ({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
});


test.describe('Test register user', () => {
    test('', async ({page}) => {
        const pageRegister = new PageRegister(page);
        await pageRegister.registerUser('test', 'user', 'abc@gmail.com', '09059999', '12345', false);
    })
})

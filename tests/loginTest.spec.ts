import {chromium, test, expect, type Page} from '@playwright/test';
import PageLogin from '../pom/PageLogin.spec';

test.beforeEach(async ({page}) => {
    const browsers = await chromium.launch();
    const context = await browsers.newContext();
    page = await context.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
});

test.describe('Test page login', ()=>{
    test('test login with user valid',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login('abc@gmail.com','12345');
    })

    test('test login with user invalid',async (page) => {
        
    })
})


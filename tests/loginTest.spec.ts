import {chromium, test, expect, type Page} from '@playwright/test';
import PageLogin from '../pom/PageLogin.spec';

test.beforeEach(async ({page}) => {
    // const browsers = await chromium.launch();
    // const context = await browsers.newContext();
    // page = await context.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
});

test.describe('Test page login', ()=>{
    test('test login with user valid',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login('starturetest@gmail.com','123458x@X');
    })

    test('test login with email and password is invalid',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login('test','abc');
        await pageLogin.verifyWaringIsDisplayed(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    })

    test('test login with email and password is empty',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login('','');
        await pageLogin.verifyWaringIsDisplayed(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    })

    test('test login with email is empty',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login('','123458x@X');
        await pageLogin.verifyWaringIsDisplayed(' Warning: No match for E-Mail Address and/or Password.');
    })

    test('test login with password is empty',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login('abc@gmail','');
        await pageLogin.verifyWaringIsDisplayed(' Warning: No match for E-Mail Address and/or Password.');
    })

    test('Create new customer',async ({page}) => {
        const pageLogin = new PageLogin(page);
        
    })
})


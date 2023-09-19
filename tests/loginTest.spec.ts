import {chromium, test, expect, type Page} from '@playwright/test';
import PageLogin from '../pom/PageLogin.spec';
import PageRegister from '../pom/PageRegister.spec';
import { PageHome } from '../pom/PageHome';
import * as userdata from '../data/login-data.json';

test.beforeEach(async ({page}) => {
    let pageHome: PageHome;
    pageHome = new PageHome(page);
    await pageHome.goto('https://ecommerce-playground.lambdatest.io/');
    await pageHome.login();
});

test.describe('Test page login', ()=>{
    test('test login with user valid',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login(userdata[0].email, userdata[0].password);
    })

    test('test login with email and password is invalid',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login(userdata[1].email, userdata[1].password);
        await pageLogin.verifyWaringIsDisplayed(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    })

    test('test login with email and password is empty',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login(userdata[2].email, userdata[2].password);
        await pageLogin.verifyWaringIsDisplayed(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    })

    test('test login with email is empty',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login(userdata[3].email, userdata[3].password);
        await pageLogin.verifyWaringIsDisplayed(' Warning: No match for E-Mail Address and/or Password.');
    })

    test('test login with password is empty',async ({page}) => {
        const pageLogin = new PageLogin(page);
        await pageLogin.login(userdata[4].email, userdata[4].password);
        await pageLogin.verifyWaringIsDisplayed(' Warning: No match for E-Mail Address and/or Password.');
    })

    test('Create new customer', async ({page}, testInfo) => {
        const pageLogin = new PageLogin(page);
        const pageRegister = new PageRegister(page);
        await pageLogin.registerUser();
        await pageRegister.registerUser('test', 'userRegisterTest', 'registeruser@gmail.com', '09059999', '12345', true);
    })
})

test.afterEach(async({page}, testInfo)=>{
    if(testInfo.status!="passed"){
    await page.screenshot({path: "Output/"  + testInfo.title +".png", fullPage: true});
    }
})


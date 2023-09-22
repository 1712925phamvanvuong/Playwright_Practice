import {test, expect, type Page} from '@playwright/test';
import PageRegister from '../pom/PageRegister.spec';
import { PageHome } from '../pom/PageHome';
import * as userdata from "../data/register-data.json";

test.beforeEach(async ({page}) => {
    let pageHome: PageHome;
    pageHome = new PageHome(page);
    await pageHome.goto('https://ecommerce-playground.lambdatest.io/');
    await pageHome.register();
});


test.describe('Test page register', () => {
    test('Test register user', async ({page}) => {
        const pageRegister = new PageRegister(page);
        await pageRegister.registerUser(userdata[0].firstname, userdata[0].lastname, userdata[0].email, userdata[0].telephone, userdata[0].password, userdata[0].subscribe);
    })

    test('Test register with user is existing', async ({page}) => {
        const pageRegister = new PageRegister(page);
        await pageRegister.registerUser(userdata[0].firstname, userdata[0].lastname, userdata[0].email, userdata[0].telephone, userdata[0].password, userdata[0].subscribe);
        await pageRegister.verifyWarningIsDisplayed("Warning: E-Mail Address is already registered!");
    })

    test('Test register with first name is empty',async ({page}) => {
        const pageRegister = new PageRegister(page);
        await pageRegister.registerUser(userdata[1].firstname, userdata[1].lastname, userdata[1].email, userdata[1].telephone, userdata[1].password, userdata[1].subscribe);
        await pageRegister.verifyWarningIsDisplayed("Warning: E-Mail Address is already registered!");
    })
})

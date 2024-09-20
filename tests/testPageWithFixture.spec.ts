import {test, expect} from '../fixture/fixture.spec.ts';
import PageRegister from '../pom/PageRegister.spec';
import { PageHome } from '../pom/PageHome';
import * as userdata from "../data/register-data.json";

test.beforeEach(async ({registerPage}) => {
    await registerPage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
});


test.describe('Test page register', () => {
    test('Test register user', {tag: '@smoke'}, async ({registerPage}) => {
        await registerPage.registerUser(userdata[0].firstname, userdata[0].lastname, userdata[0].email, userdata[0].telephone, userdata[0].password, userdata[0].subscribe);
    })

    test('Test register with user is existing', {tag: '@regression'}, async ({registerPage}) => {
        await registerPage.registerUser(userdata[0].firstname, userdata[0].lastname, userdata[0].email, userdata[0].telephone, userdata[0].password, userdata[0].subscribe);
        await registerPage.verifyWarningIsDisplayed("Warning: E-Mail Address is already registered!");
    })

    test('Test register with first name is empty', {tag: '@smoke'}, async ({registerPage}) => {
        await registerPage.registerUser(userdata[1].firstname, userdata[1].lastname, userdata[1].email, userdata[1].telephone, userdata[1].password, userdata[1].subscribe);
        await registerPage.verifyWarningIsDisplayed("Warning: E-Mail Address is already registered!");
    })
})

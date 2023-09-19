import {test, expect, type Page} from '@playwright/test';
import PageRegister from '../pom/PageRegister.spec';
import { PageHome } from '../pom/PageHome';

test.beforeEach(async ({page}) => {
    let pageHome: PageHome;
    pageHome = new PageHome(page);
    await pageHome.goto('https://ecommerce-playground.lambdatest.io/');
    await pageHome.register();
});


test.describe('Test page register', () => {
    test('Test register user', async ({page}) => {
        const pageRegister = new PageRegister(page);
        await pageRegister.registerUser('test', 'user', 'abc@gmail.com', '09059999', '12345', true);
    })
})

import {test, expect, type Page} from '@playwright/test';
import { PageHome } from '../pom/PageHome';
import  PageProducts  from '../pom/PageProducts.spec';

test.beforeEach(async ({page}) => {
    let pageHome: PageHome;
    pageHome = new PageHome(page);
    await pageHome.goto('https://ecommerce-playground.lambdatest.io/');
});

test.describe('Test page register', () => {
    test('Test register user', async ({page}) => {
        const pageProducts = new PageProducts(page);
        await pageProducts.addToCart('HTC Touch HD');
    })
})

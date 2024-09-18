import {test, expect} from '@playwright/test';
import { PageHome } from '../pom/PageHome';

test.beforeEach(async ({page}) => {
    let pageHome: PageHome;
    pageHome = new PageHome(page);
    await pageHome.goto('https://ecommerce-playground.lambdatest.io/');
});

test.describe('Test Page Home', ()=>{
    test('test go to home page', async({page})=>{
        const  pageHome = new PageHome(page);
        await pageHome.verifySearchButtonSearchIsDisplayed();
        await pageHome.verifySectionTitle("TOP PRODUCTS");
    })

    test('test view detail product', async(page)=>{
    })
})
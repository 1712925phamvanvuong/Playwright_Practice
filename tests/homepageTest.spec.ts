import {test, expect} from '@playwright/test';
import { PageHome } from '../pom/PageHome';

test.beforeEach(async ({page}) => {
    // const browsers = await chromium.launch();
    // const context = await browsers.newContext();
    // page = await context.newPage();
    let pageHome: PageHome;
    pageHome = new PageHome(page);
    await pageHome.goto('https://ecommerce-playground.lambdatest.io/');
});

test.describe('Test Page Home', async()=>{
    test('test go to home page', async()=>{
        console.debug('test');
    })
})
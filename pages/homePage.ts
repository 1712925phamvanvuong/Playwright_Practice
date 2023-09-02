import { expect, Locator, Page } from "@playwright/test";
import {BasePage} from './basePage';

export class HomePage extends BasePage{
    readonly abcLocator: Locator;
    readonly heading: Locator;

    constructor(page: Page){
        super(page);
        this.abcLocator = page.getByRole('link', { name: 'Get started' });
        this.heading = page.getByRole('heading', { name: 'Installation' });
    }

    async clickabc(){
        await this.abcLocator.click();
    }
    
    async verify(){
        await expect(this.heading).toBeVisible();
    }
}
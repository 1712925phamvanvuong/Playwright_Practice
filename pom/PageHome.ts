import { Locator, Page, expect } from "@playwright/test";
import { BaseTest } from "./BaseTest";

export class PageHome extends BaseTest{
    constructor(page: Page){
        super(page);
    }
    
    searchButton: string = "//button[text()='Search']";

    async verifyIsDisplayed(locator: string){
        await this.page.locator(locator).isVisible();
    }

    async verifySearchButtonIsDisplayed(){
        await this.verifyIsDisplayed(this.searchButton);
    }
}
import { Locator, Page, expect } from "@playwright/test";
import { BaseTest } from "./BaseTest";

export class PageHome extends BaseTest{
    readonly searchButton: Locator
    constructor(page: Page){
        super(page);
        this.searchButton = page.locator("//button[text()='Search']");
    }
    
    async verifySearchButtonSearchIsDisplayed(){
        await this.searchButton.isVisible();
    }
}
import { Locator, Page, expect } from "@playwright/test";
import { BaseTest } from "./BaseTest";

export class PageHome extends BaseTest{
    readonly searchButton: Locator
    readonly registerButton: Locator
    navigationButton(button: string){
        return "//ul[@class='navbar-nav horizontal']//span[@class='title'][normalize-space()='" + button + "']";
    }
    sectionTitle(title: string){
        return "//h3[text()='" + title +"']";
    }

    constructor(page: Page){
        super(page);
        this.searchButton = page.locator("//button[text()='Search']");
        this.registerButton = page.locator("//span[normalize-space()='Register']");
    }
    
    async login(){
        await this.page.locator(this.navigationButton("My account")).click();
    }

    async register(){
        await this.page.locator(this.navigationButton("My account")).hover();
        await this.registerButton.click();
    }

    async verifySearchButtonSearchIsDisplayed(){
        await this.searchButton.isVisible();
    }

    async verifySectionTitle(title: string){
        await this.page.locator(this.sectionTitle(title)).isVisible();
    }
}
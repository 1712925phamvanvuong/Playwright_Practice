import{ expect , type Locator, type Page } from "@playwright/test";

export default class PageRegister{
    subscribeYes: string = "//label[@for='input-newsletter-yes']";
    subscribeNo: string = "//label[@for='input-newsletter-no']";
    checkboxAgree: string = "//label[@for='input-agree']";
    buttonContinue: string = "//input[@value='Continue']";
    fieldInput(fieldName: string){ return "//input[@id='"+ fieldName + "']"};

    constructor (public page: Page){

    }

    async registerUser(firstName: string, lastName: string, email: string, telephone: string, password: string, subscribe: boolean){
        console.debug('Input first name');
        await this.page.locator(this.fieldInput("input-firstname")).type(firstName);
        console.debug('Input last name');
        await this.page.locator(this.fieldInput("input-lastname")).type(lastName);
        console.debug('Input email');
        await this.page.locator(this.fieldInput("input-email")).type(email);
        console.debug('Input telephone');
        await this.page.locator(this.fieldInput("input-telephone")).type(telephone);
        console.debug('Input password');
        await this.page.locator(this.fieldInput("input-password")).type(password);
        console.debug('Input password confirm');
        await this.page.locator(this.fieldInput("input-confirm")).type(password);
        console.debug('Check subscribe default is No');
        await this.page.locator(this.subscribeNo).isChecked();
        if(subscribe){
            console.debug('Select subscribe yes');
            await this.page.locator(this.subscribeYes).click();
            console.debug('Check subscribe is Yes')
            await this.page.locator(this.subscribeYes).isChecked();
        }
        console.debug('Check I agree policy');
        await this.page.locator(this.checkboxAgree).click();
        console.debug('Click on continue button');
        await this.page.locator(this.buttonContinue).click();
    }
}
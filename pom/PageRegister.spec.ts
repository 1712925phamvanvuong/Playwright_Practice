import{ Page } from "@playwright/test";

export default class PageRegister{
    constructor (public page: Page){

    }

    fieldFirstName: string = "//input[@id='input-firstname']"
    fieldLastName: string = "//input[@id='input-lastname']"
    fieldEmail: string = "//input[@id='input-email']";
    fieldTelePhone: string = "//input[@id='input-telephone']";
    fieldPassword: string = "//input[@id='input-password']";
    fieldPasswordConfirm: string = "//input[@id='input-confirm']";
    subscribeYes: string = "//label[@for='input-newsletter-yes']";
    subscribeNo: string = "//label[@for='input-newsletter-no']";
    checkboxAgree: string = "//label[@for='input-agree']";
    buttonContinue: string = "//input[@value='Continue']";

    async registerUser(firstName: string, lastName: string, email: string, telephone: string, password: string, subscribe: boolean){
        console.debug('Input first name');
        await this.page.locator(this.fieldFirstName).type(firstName);
        console.debug('Input last name');
        await this.page.locator(this.fieldLastName).type(lastName);
        console.debug('Input email');
        await this.page.locator(this.fieldEmail).type(email);
        console.debug('Input telephone');
        await this.page.locator(this.fieldTelePhone).type(telephone);
        console.debug('Input password');
        await this.page.locator(this.fieldPassword).type(password);
        console.debug('Input password confirm');
        await this.page.locator(this.fieldPassword).type(password);
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
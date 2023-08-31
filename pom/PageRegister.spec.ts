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
    subscribe: string = "//input[@id='input-newsletter-yes']";
    checkboxAgree: string = "//input[@id='input-agree']";

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
        if(subscribe){
            console.debug('Select subscribe yes');
            await this.page.locator(this.subscribe).click();
        }
        console.debug('Check I agree policy');
        await this.page.locator(this.checkboxAgree).click();
    }
}
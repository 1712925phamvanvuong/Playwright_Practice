import { Page } from "@playwright/test";

export default class PageLogin{
    constructor(public page: Page){

    }

    buttonLogin: string = "//input[@id='login-button']";
    fieldEmail: string = 'E-Mail Address';
    fieldPassword: string = 'Password';

    async inputUserName(email: string){
        await this.page.getByPlaceholder(this.fieldEmail).type(email);
    }

    async inputPassword(password: string){
        await this.page.getByPlaceholder(this.fieldPassword).type(password);
    }

    async login(email: string, password: string){
        console.debug('Input email');
        this.inputUserName(email);
        console.debug('Input password');
        this.inputPassword(password);

        await this.page.locator(this.buttonLogin).click();
    }
}
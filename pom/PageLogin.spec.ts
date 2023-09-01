import { Page } from "@playwright/test";

export default class PageLogin{
    constructor(public page: Page){

    }

    buttonLogin: string = "//input[@value='Login']";
    fieldEmail: string = "//input[@id='input-email']";
    fieldPassword: string = "//input[@id='input-password']";
    alertWarning(message: string){ return "//div[@class='alert alert-danger alert-dismissible'][text()='" + message + "']";}
    buttonContinue: string = "//a[text()='Continue']";

    async inputUserName(email: string){
        await this.page.locator(this.fieldEmail).type(email);
    }

    async inputPassword(password: string){
        await this.page.locator(this.fieldPassword).type(password);
    }

    async login(email: string, password: string){
        console.debug('Input email');
        this.inputUserName(email);
        console.debug('Input password');
        this.inputPassword(password);
        console.log('Click on button login')
        await this.page.locator(this.buttonLogin).click();
    }

    async verifyWaringIsDisplayed(message: string){
        console.log('Verify warning alert is displayed')
        await this.page.locator(this.alertWarning(message)).isVisible();
    }
}
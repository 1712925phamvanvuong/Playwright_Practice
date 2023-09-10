import { expect, Page, Locator, test } from "@playwright/test";
import PageRegister from "./PageRegister.spec";
import {BaseTest} from "./BaseTest";

export default class PageLogin extends BaseTest {
    readonly buttonLogin: Locator;
    readonly fieldEmail: Locator;
    readonly fieldPassword: Locator;
    readonly buttonContinue: Locator;

    constructor(page: Page){
        super(page);
        this.buttonLogin = page.locator("//input[@value='Login']");
        this.fieldEmail = page.locator("//input[@id='input-email']");
        this.fieldPassword = page.locator("//input[@id='input-password']");
        this.buttonContinue = page.locator("//[@class='btn btn-primary']");
    };

    alertWarning(message: string){
        return "//div[@class='alert alert-danger alert-dismissible'][text()='" + message + "']";
    }
    
    async inputUserName(email: string){
        await this.fieldEmail.type(email);
    }

    async inputPassword(password: string){
        await this.fieldPassword.type(password);
    }

    async login(email: string, password: string){
        console.debug('Input email');
        this.inputUserName(email);
        console.debug('Input password');
        this.inputPassword(password);
        console.log('Click on button login')
        await this.buttonLogin.click();
    }

    async verifyWaringIsDisplayed(message: string){
        console.log('Verify warning alert is displayed')
        await this.page.locator(this.alertWarning(message)).isVisible();
    }

    async registerUser(){
        console.log("Click on button Continue to register user");
        await this.buttonContinue.click();
    }
}
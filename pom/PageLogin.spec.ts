import { expect, Page, Locator } from "@playwright/test";
import PageRegister from "./PageRegister.spec";
import {BaseTest} from "./BaseTest";

export default class PageLogin extends BaseTest {
    constructor(page: Page){
        super(page);
        
    };

    buttonLogin: string = "//input[@value='Login']";
    fieldEmail: string = "//input[@id='input-email']";
    fieldPassword: string = "//input[@id='input-password']";
    alertWarning(message: string){ return "//div[@class='alert alert-danger alert-dismissible'][text()='" + message + "']";}
    buttonContinue: string = "//a[@class='btn btn-primary']";

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

    async registerUser(){
        console.log("Click on button Continue to register user");
        this.page.locator(this.buttonContinue).click();
    }
}
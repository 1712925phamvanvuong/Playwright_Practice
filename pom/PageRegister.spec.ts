import{ expect , Locator, Page } from "@playwright/test";
import {BaseTest} from "./BaseTest";

export default class PageRegister extends BaseTest{
    readonly buttonContinue: Locator;
    readonly firstNameFieldInput: Locator;
    readonly lastNameFieldInput: Locator;
    readonly emailFieldInput: Locator;
    readonly telephoneFieldInput: Locator;
    readonly passwordFieldInput: Locator;
    readonly confirmPasswordFieldInput: Locator;
    readonly lableButtonNo: Locator;
    readonly lableButtonYes: Locator;
    readonly lableAgree: Locator;

    constructor (page: Page){
        super(page);
        this.buttonContinue = page.locator("//input[@value='Continue']");
        this.firstNameFieldInput = page.locator("//input[@id='input-firstname']");
        this.lastNameFieldInput = page.locator("//input[@id='input-lastname']");
        this.emailFieldInput = page.locator("//input[@id='input-email']");
        this.telephoneFieldInput = page.locator("//input[@id='input-telephone']");
        this.passwordFieldInput = page.locator("//input[@id='input-password']");
        this.confirmPasswordFieldInput = page.locator("//input[@id='input-confirm']");
        this.lableButtonNo = page.locator("//label[@for='input-newsletter-no']");
        this.lableButtonYes = page.locator("//label[@for='input-newsletter-yes']");
        this.lableAgree = page.locator("//label[@for='input-agree']");
    }

    async registerUser(firstName: string, lastName: string, email: string, telephone: string, password: string, subscribe: boolean){
        console.debug('Input first name');
        await this.firstNameFieldInput.type(firstName);
        console.debug('Input last name');
        await this.lastNameFieldInput.type(lastName);
        console.debug('Input email');
        await this.emailFieldInput.type(email);
        console.debug('Input telephone');
        await this.telephoneFieldInput.type(telephone);
        console.debug('Input password');
        await this.passwordFieldInput.type(password);
        console.debug('Input password confirm');
        await this.confirmPasswordFieldInput.type(password);
        console.debug('Check subscribe default is No');
        await this.lableButtonNo.isChecked();
        if(subscribe){
            console.debug('Select subscribe yes');
            await this.lableButtonYes.click();
            console.debug('Check subscribe is Yes')
            await this.lableButtonYes.isChecked();
        }
        console.debug('Check I agree policy');
        await this.lableAgree.click();
        console.debug('Click on continue button');
        await this.buttonContinue.click();
    }
}
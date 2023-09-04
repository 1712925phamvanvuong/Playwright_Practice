import{ expect , Locator, Page } from "@playwright/test";
import {BaseTest} from "./BaseTest";

export default class PageRegister extends BaseTest{
    readonly buttonContinue: Locator;
    fieldInput(fieldName: string){ return "//input[@id='"+ fieldName + "']"; }
    lableButon(lableName: string){ return "//label[@for='" + lableName + "']"; }

    constructor (page: Page){
        super(page);
        this.buttonContinue = page.locator("//input[@value='Continue']");
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
        await this.page.locator(this.lableButon("input-newsletter-no")).isChecked();
        if(subscribe){
            console.debug('Select subscribe yes');
            await this.page.locator(this.lableButon("input-newsletter-yes")).click();
            console.debug('Check subscribe is Yes')
            await this.page.locator(this.lableButon("input-newsletter-yes")).isChecked();
        }
        console.debug('Check I agree policy');
        await this.page.locator(this.lableButon("input-agree")).click();
        console.debug('Click on continue button');
        await this.buttonContinue.click();
    }
}
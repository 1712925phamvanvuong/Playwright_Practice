import { Page } from "@playwright/test";

export default class LoginPage{
    constructor(public page: Page){

    }

    buttonLogin: string = 'xpath button login';
    fieldUserName: string = 'user name';
    fieldPassword: string = 'password';

    async inputUserName(userName: string){
        await this.page.getByTestId(this.fieldUserName).type(userName);
    }

    async inputPassword(password: string){
        await this.page.getByTestId(this.fieldPassword).type(password);
    }

    async login(userName: string, password: string){
        console.debug('Input user name');
        this.inputUserName(userName);
        console.debug('Input password');
        this.inputPassword(password);

        await this.page.locator(this.buttonLogin).click();
    }
}
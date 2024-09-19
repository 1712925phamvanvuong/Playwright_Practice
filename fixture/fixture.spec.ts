import {test as baseTest} from "@playwright/test"
import PageRegister from "../pom/PageRegister.spec"
import PageLogin from "../pom/PageLogin.spec"
import { PageHome } from "../pom/PageHome"

type pages = {
    registerPage: PageRegister;
    loginPage: PageLogin;
    homePage: PageHome;
}

const testPages = baseTest.extend<pages>({
    registerPage: async({page}, use) => {
        await use(new PageRegister(page));
    },

    loginPage: async({page}, use) => {
        await use(new PageLogin(page));
    },

    homePage: async({page}, use) => {
        await use(new PageHome(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
import { Expect, Locator, Page } from "@playwright/test";
import { BaseTest } from "./BaseTest";

export class PageHome extends BaseTest{
    constructor(page: Page){
        super(page);
    }
}
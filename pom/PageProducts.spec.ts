import { expect, Page, Locator, test } from "@playwright/test";
import {BaseTest} from "./BaseTest";

export default class PageProducts extends BaseTest{
    readonly buttonHome: Locator;
    readonly buttonFilter: Locator;
    readonly productCompareLink: Locator;
    readonly addToCartButton: Locator;
    constructor(page: Page){
        super(page);
        this.buttonHome = page.locator("//i[@class='fa fa-home']");
        this.buttonFilter = page.locator("//i[@class='icon fas fa-filter']/..");
        this.productCompareLink = page.locator("//a[text()='Product Compare (0)']");
        this.addToCartButton = page.locator("");
    };

    //Header title page of every type product
    headerTitlePage(title: string){
        return this.page.locator("//h1[text()='" + title + "']");
    }

    //Title name of product
    titleProduct(title: string){
        return "//a[@class='text-ellipsis-2'][contains(text(),'" + title + "')]/..";
    }

    priceProduct(title: string){
        return this.titleProduct(title) + "/following-sibling::div[@class='price']/span";
    }

    productImage(title: string){
        return this.titleProduct(title) + "//ancestor::div[@class='product-thumb']//div[@class='product-thumb-top']";
    }

    async selectToViewProduct(title: string){
        console.debug("Select product")
        this.page.locator(this.titleProduct(title)).click();
    }

    async addToCart(title: string){
        console.debug("Hover to image product")
        this.page.locator(this.productImage(title)).hover();
        console.debug("Click on add to cart button");
        this.page.locator(this.titleProduct(title) + "//ancestor::div[@class='product-thumb']//span[text()='Add to Cart']");
    }
}
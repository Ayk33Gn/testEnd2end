/* import {  setWorldConstructor,  World } from '@cucumber/cucumber'
import playwright from 'playwright'

export class CustomWorld extends World {
    browser?: playwright.Browser
    context?: playwright.BrowserContext
    page?: playwright.Page


    async openUrl(url: string) {
        if (this.context) {
            this.page = await this.context.newPage();
            await this.page.goto(url);
        } else {
            throw new Error("error initializing context")
        }
        if (!this.page) {
            throw new Error("Error initializing page")
        }
    }
}

setWorldConstructor(CustomWorld)

 */
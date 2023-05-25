const { Given, When, Then } = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');


Given("I visit the localhost:3000", async function () {
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('http://localhost:3000');
});

When('I enter the name {string} in the text field', async function (name) {
if(this.page) {
await this.page.locator('[id="inputText"]', name).fill('John Doe');
}
  });

When('I click the submit button', async function () {
  if(this.page) {
  await this.page.locator('[id="inputSubmit"]').click();
  }
  });

Then('I should see the message {string}', async function (expectedMessage) {
  if(this.page) {
  await this.page.waitForSelector('.message');
    const actualMessage = this.page.innerText('.message');
    expect(actualMessage).toBe(expectedMessage);
  }
  });


  Given('I have a list of name', async function () {
    if(this.page) {
      await this.page.locator('[id:list]');
    }
  });

  When('I click the button', async function () {
    if(this.page) {
      await this.page.locator('[id=remove]').click()
    }
  });

Then('I should remove the name list', async function () {
  
})


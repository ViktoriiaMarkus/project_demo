const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../features/pageobjects/login.page');

Given('I am on the login page', async () => {
  await browser.url('https://www.saucedemo.com/');
});

When('I enter credentials with username {string} and password {string}', (username, password) => {
  LoginPage.login(username, password);
});

When('I clear the login form fields', () => {
  LoginPage.clearFields();
});

When('I click the login button', () => {
  LoginPage.loginButton.click();
});

Then('I should see the error message {string}', (errorMessage) => {
  expect(LoginPage.errorMessage).toHaveText(errorMessage);
});

Then('I should see the page title as {string}', async (expectedTitle) => {
  const title = await browser.getTitle();
  expect(title).toBe(expectedTitle);
});
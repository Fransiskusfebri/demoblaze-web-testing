const {Given, When, Then} = require('@wdio/cucumber-framework');
const cartPage = require('../pageobjects/cart-page');
const frontPage = require('../pageobjects/front-page');

const FrontPage = require('../pageobjects/front-page');
const homePage = require('../pageobjects/home-page');
const { buttonLogout } = require('../pageobjects/home-page');
const HomePage = require('../pageobjects/home-page');


Given(/^I am on the front page$/, async() => {
    await FrontPage.open()
})

When(/^I try to login with correct credential$/, async() => {
    await FrontPage.login('FransiskusFebri', 'Febri');
})

Then (/^I am successfully logged in$/, async() => {
    await HomePage.verifyLoginSuccess('FransiskusFebri')
})

When ('I try to login with username {string} and password {string}', async(username, password) => {
    await frontPage.login(username, password);
})


Then ('I am successfully logged in with username {string}', async(username) => {
    await HomePage.verifyLoginSuccess(username);
})


When ('I add item {string} to cart', async(itemName) => {
    await HomePage.clickProductName(itemName)
    await cartPage.clickBtnAddToCart()
    await browser.pause(5000)
    await cartPage.clickOkAlert()
    await cartPage.clickBrowserBack()
    await browser.pause(5000)
})

Then(/^I log out$/, async() => {
    await HomePage.logout();
    
})


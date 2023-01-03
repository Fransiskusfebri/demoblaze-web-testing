const Page = require('./page')
const FrontPage = require('../pageobjects/front-page');

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    getProductNameLocator(itemName){
        return $(`//a[text()='${itemName}']`)
    }

    async clickProductName(itemName){
        await this.getProductNameLocator(itemName).click()
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }

    async logout() {
        await this.buttonLogout.click()
        await browser.pause(5000);
        return $(`.btn-success`)

    }
}

module.exports = new HomePage();
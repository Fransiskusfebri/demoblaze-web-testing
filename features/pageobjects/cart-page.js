const Page = require('./page')

class cartPage extends Page {
    get btnAddToCart(){
        return $(`.btn-success`)
    }

    async clickBtnAddToCart(){
        await this.btnAddToCart.click();
    }

    async clickOkAlert(){
        await browser.acceptAlert();
    }

    async clickBrowserBack(){
        await browser.back();
        await browser.back();
    }

} 

module.exports = new cartPage()
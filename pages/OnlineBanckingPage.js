const { default: BasePage } = require("./BasePage");

export default class OnlineBankingPage extends BasePage {
    
    async isOnlineBankingPageDisplayed() {
        await page.waitForSelector("#online_banking_features");
    };

    async visit() {
        await page.goto("http://zero.webappsecurity.com/online-banking.html");
        await page.waitForSelector("#online_banking_features");
        //await page.isOnlineBankingPageDisplayed();
    };


    async isOnlineBankingFeatureDisplayed() {
        await page.waitForSelector("#account_summary_link");
        await page.waitForSelector("#account_activity_link");
        await page.waitForSelector("#transfer_funds_link");
        await page.waitForSelector("#pay_bills_link");
        await page.waitForSelector("#money_map_link");
        await page.waitForSelector("#online_statements_link");
    }
}
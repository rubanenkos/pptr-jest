const { default: BasePage } = require("./BasePage");

const form_inputs = ".signin-controls form-inputs";

export default class FeedbackPage extends BasePage {

    async visit() {
        await page.goto("http://zero.webappsecurity.com/feedback.html");
        // await page.waitForSelector(form_inputs);
    };
}
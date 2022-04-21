import FeedbackPage from '../pages/FeedbackPage';
import timeOut from "../config";

jest.setTimeout(timeOut);

describe('Feedback Form suite', () => {
    let feedbackPage;
    
    beforeAll(async () => {
        
        await page.setViewport({ width: 1280, height: 800 })
        feedbackPage = new FeedbackPage();
    }); 

    it('Feedback page is loaded', async () => {
        await feedbackPage.visit();
    });

  

})
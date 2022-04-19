import FeedbackPage from '../pages/FeedbackPage';

jest.setTimeout(5000);

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
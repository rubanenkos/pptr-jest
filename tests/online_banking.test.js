import OnlineBankingPage from '../pages/OnlineBanckingPage'

jest.setTimeout(15000);

describe('Online Banking suite', () => {
    let onlineBankingPage;
    
    beforeAll(async () => {
        
        await page.setViewport({ width: 1280, height: 800 })
        onlineBankingPage = new OnlineBankingPage();
    }); 

    it('Online Banking page is loaded', async () => {
        await onlineBankingPage.visit();
    });

    it('Check is Online Banking page shown', async () => {
        await onlineBankingPage.visit();
        await onlineBankingPage.isOnlineBankingPageDisplayed() 
    });

    it('Check are Banking Feature shown', async () => {
        await onlineBankingPage.visit();
        await onlineBankingPage.isOnlineBankingFeatureDisplayed() 
    })

})
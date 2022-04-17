import HomePage from '../pages/HomePage'

describe('First test',  () => {
    let homePage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homePage = new HomePage();
    }); 

    it('Home page should be open', async () => {
        await homePage.visit();
    });

    it('Navbar should be displayed', async () => {
        await homePage.isHomePageDisplayed();       
    });

}); 
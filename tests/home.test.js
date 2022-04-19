import HomePage from '../pages/HomePage'
jest.setTimeout(5000);
describe('First test',  () => {
    let homePage;

    beforeAll(async () => {
        
        homePage = new HomePage();
    }); 

    it('Home page should be open', async () => {
        await homePage.visit();
    });

    it('Navbar should be displayed', async () => {
        await homePage.isHomePageDisplayed();       
    });

}); 
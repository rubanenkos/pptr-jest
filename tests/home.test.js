import HomePage from '../pages/HomePage'
import timeOut from "../config"

jest.setTimeout(timeOut);
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
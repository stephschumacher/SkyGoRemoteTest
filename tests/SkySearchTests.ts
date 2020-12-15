import { homePageUrl } from './../common/constants';
import SkyHomePage from "../pages/SkyHomePage"

const homePage = new SkyHomePage();

fixture
  .page(homePageUrl)
  .disablePageCaching
  .disablePageReloads("This feature will make the search show the results that are determined by editorial, as well as generic searches")
  .beforeEach( async ctx => { 
    await homePage.acceptCookies()
  });



test("User sees the editorial section in specific searches", async (t) => {
  await homePage.searchAndSeeEditorialSection('Sky');
});

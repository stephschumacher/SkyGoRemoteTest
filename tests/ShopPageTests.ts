import { homePageUrl, dealsUrl, shopOffersUrl } from './../common/constants';
import SkyHomePage from "../pages/SkyHomePage"
import SignInPage from "../pages/SignInPage"
import ShopOffersPage from "../pages/ShopOffersPage"

const homePage = new SkyHomePage();
const signInPage = new SignInPage();
const offersPage = new ShopOffersPage();

fixture
  .page(homePageUrl)
  .disablePageCaching
  .disablePageReloads("This feature will make sure that the shop page is navigable and usable")
  .beforeEach( async ctx => { 
    await homePage.acceptCookies()
  });

test("User navigates to shop page", async (t) => {
  await homePage.acceptCookies();
  await homePage.checkDealsMenuDestination(dealsUrl);
});

test("User Signs in with invalid credentials", async (t) => {
  await signInPage.signInWithInvalidCredentials("steph", "steph");
});

test("User sees a list of offers on the latest offers page ", async (t) => {
  await t.navigateTo(shopOffersUrl) 
  await offersPage.checkOfferPrices([39, 27, 46])
});



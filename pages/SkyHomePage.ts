import { ClientFunction, Selector, t } from 'testcafe';
import { log, LogType } from "../common/log";

const getLocation = ClientFunction(() => document.location.href);


export default class SkyMainPage  {
  iframe:Selector;
  dealsMenu:Selector;
  cookieContainer: Selector;
  cookieContainerNotVisible: Selector;
  cookieContainerVisible: Selector;
  agreeBtn:Selector;
  searchButton:Selector;
  searchInput:Selector;
  editorialSection: Selector;

  constructor() {
    this.cookieContainer = Selector('#sp_message_container_207015')
    this.cookieContainerVisible = this.cookieContainer.withAttribute("style", "display: block;")
    this.cookieContainerNotVisible = this.cookieContainer.withAttribute("style", "display: none;")
    this.agreeBtn = Selector("button").withAttribute('title', 'Agree');
    this.iframe = Selector("#sp_message_iframe_207015")
    this.dealsMenu = Selector('a').withExactText("Deals")
    this.searchButton = Selector('svg').withAttribute('data-test-id', 'masthead-search-toggle-button-icon')
    this.searchInput = Selector('input').withAttribute('data-test-id', 'input-box')
    this.editorialSection = Selector('div').withAttribute('data-test-id', 'editorial-section')

  }

  /////////////
  // acceptCookies
  // If the cookie window is visible, accept cookies and check it disappears
  /////////////
  async acceptCookies() {  
    if(!(await this.cookieContainerVisible.exists)) {
      return;
    }

    await t.switchToIframe(this.iframe)
    await t.click(this.agreeBtn)
    await t.switchToMainWindow();

    await t.expect(this.cookieContainerNotVisible.exists).ok("Cookie window should not be visible")
    log('Cookie window is not visible', LogType.Success)
  }

  /////////////
  // checkDealsMenuDestination
  // Check that the deals link points to the correct place and that it does take you there
  // dealsUrl = the url where the deals link should take us
  /////////////
  async checkDealsMenuDestination(dealsUrl: string) {
    await t.expect(this.dealsMenu.withAttribute("href", dealsUrl).exists).ok()
    log(`Deals link references ${dealsUrl}`, LogType.Success)
    await t.click(this.dealsMenu)
    await t.expect(getLocation()).contains(dealsUrl);
    log(`The page has changed to ${dealsUrl}`, LogType.Success)
  }

  /////////////
  // searchAndSeeEditorialSection
  // Perform a site search and check that the editorial section is displayed
  // searchText = text to search for
  /////////////
  async searchAndSeeEditorialSection(searchText: string) {
    await t.click(this.searchButton)
    await t.typeText(this.searchInput, searchText)
    await t.expect(this.editorialSection.exists).ok()
    log(`Editorial section exists on search: ${searchText}`, LogType.Success)
  }

}



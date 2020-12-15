import { Selector, t } from 'testcafe';
import { log, LogType } from "../common/log";


const errorMessageString = "Sorry, we did not recognise either your username or password";

export default class SignInPage  {

    signInMenu: Selector;
    usernameInput: Selector;
    passwordInput: Selector;
    signInButton: Selector;
    errorMessage: Selector;
    
  
    constructor() {
        this.signInMenu = Selector('a').withAttribute("data-test-id", "sign-in-link")
        this.usernameInput = Selector("#username")
        this.passwordInput = Selector("#password")
        this.signInButton = Selector("#signinButton")
        this.errorMessage = Selector ("li").withText(errorMessageString)
    }

    /////////////
    // signInWithInvalidCredentials
    // Sign in to the site with the credentials provided and check for the 
    // invalid credentials message
    // user = sky site username
    // password = sky site password
    /////////////
    async signInWithInvalidCredentials(user: string, password: string) {
        await t.click(this.signInMenu)
        await t.typeText(this.usernameInput, user)
        await t.typeText(this.passwordInput, password)
        await t.click(this.signInButton)
        await t.expect(this.errorMessage.exists).ok(`Message exists: ${errorMessageString}`)
        log(`Error message exists: \"${errorMessageString}\"`, LogType.Success)
  }
}
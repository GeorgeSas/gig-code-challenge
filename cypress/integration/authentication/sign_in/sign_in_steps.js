import Landing from "../../Pages/Landing";
import Login from "../../Pages/Login";
import Account from "../../Pages/Account";

let landingPage = new Landing();
let loginPage = new Login();
let accountPage = new Account();


beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?')
})


Given('I navigate to the authentication page', async () => {
    landingPage.navigateToTheLoginPage();
})


Given('I input {string} in the Email Address field', email => {
    cy.get(loginPage.email).type(email);
})


Given('I input {string} in the Password field', password => {
    cy.get(loginPage.password).type(password);
})


When('I click on the Sign In button', () => {
    cy.get(loginPage.signIn).click();
})


Then('I am logged in as {string}', user => {
    accountPage.verifyUserIsLoggedIn(user);
})

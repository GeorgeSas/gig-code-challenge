import Landing from "../../Pages/Landing";


let landingPage = new Landing();


beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?')
})


Given('I search for {string}', item => {
    landingPage.searchFor(item);
})

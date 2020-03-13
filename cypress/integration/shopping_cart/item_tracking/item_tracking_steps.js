import Landing from "../../Pages/Landing";
import ItemList from "../../Pages/ItemList";
import CartSummary from "../../Pages/CartSummary";
import Login from "../../Pages/Login";



let landingPage = new Landing();
let itemListPage = new ItemList();
let cartSummaryPage = new CartSummary();
let loginPage = new Login();



beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?')
})



Given('I search for {string}', item => {
    landingPage.searchFor(item);
})



Given('I add item number {string} to the cart', itemNumber => {
    itemListPage.addItemToCart(itemNumber);
})



Given('I click on {string} from the item list page', pageElement => {
    itemListPage.clickOn(pageElement);
})



When('I change the quantity of item number {string} to {string}', (itemNumber, qty) => {
    cartSummaryPage.modifyItemQtyAtCheckout(itemNumber, qty);
})



When('I remove item number {string} from the cart', itemNumber => {
    cartSummaryPage.removeItemFromCart(itemNumber);
})



When('I click on {string} from the checkout page', pageElement => {

    switch (pageElement) {
        case 'Proceed to checkout':
            cartSummaryPage.proceedToCheckout();
            break;
        default:
            console.log('Invalid option.');
            break;
    }

})



When('I empty the shopping cart', () => {
    cartSummaryPage.clearShoppingCart();
})



Then('the authentication page is loaded', () => {
    loginPage.verifyAuthPageIsLoaded();
    loginPage.verifyAuthIsWithinCheckoutProcess();
})



Then('the {string} message is disaplayed', expectedMessage => {
    cartSummaryPage.verifyTheActualMessageIs(expectedMessage);
})

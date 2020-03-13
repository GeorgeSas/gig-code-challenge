export default class CartSummary {


    increaseQty = '.cart_quantity_up';
    decreaseQty = '.cart_quantity_down';
    cartQtyInputs = '.cart_quantity_input';
    trashIcons = '.icon-trash';
    checkoutBtn = '.standard-checkout';
    totalPrice = '#total_price'
    alertMSg = '.alert';


    modifyItemQtyAtCheckout(itemNummber, qty) {
        cy
            .get(this.cartQtyInputs)
            .eq(itemNummber - 1)
            .clear()
            .type(qty)
            .then( () => {
                cy.wait(2000);
            })
    }


    removeItemFromCart(itemNummber) {
        cy
            .get(this.trashIcons).eq(itemNummber - 1)
            .click()
    }


    proceedToCheckout() {
        cy
            .get(this.checkoutBtn)
            .click()
    }


    clearShoppingCart() {
        cy
            .get(this.trashIcons)
            .each(icons => {
                icons.click();
            })
    }


    verifyTheActualMessageIs(expectedMessage) {

        cy
            .get(this.alertMSg)
            .invoke('text')
            .then(txt => {
                expect(txt).to.equal(expectedMessage);

            })
    }

}
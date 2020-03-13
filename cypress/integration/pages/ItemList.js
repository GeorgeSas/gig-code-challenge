export default class ItemList {


    addToCartButtons = '.ajax_add_to_cart_button';
    clearCartModel = '#layer_cart .cross';
    viewShoppingCart = '[title="View my shopping cart"]';
    checkOutFromDropDown = '#button_order_cart';


    addItemToCart(itemNumber) {
        cy
            .get(this.addToCartButtons)
            .eq(itemNumber - 1)
            .click();
        cy
            .get(this.clearCartModel)
            .click();
    }


    clickOn(pageElement) {

        switch (pageElement) {
            case 'Checkout':
                cy
                    .get(this.viewShoppingCart)
                    .trigger('mouseover');
                cy
                    .get(this.checkOutFromDropDown)
                    .click();
                break;
            default:
                console.log('Invalid option.');
                break;
        }
    }

}
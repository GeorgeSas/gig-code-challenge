Feature: Shopping Car Item Tracking


    Item in the shopping cart should be tracked and also edited on the fly.
    Following tests are to cover scenarios for both registered and
    anonymous users. Feature can be further broken down into logical
    section concerning item state, item modal, discounts, total prices and,
    finally, full checkount and payment.


    ################## AS AN ANONYMOUS USER ####################

    # Scenario: Add 2 items to cart, remove 1, change quantity and checkout
    #     Given I search for 'black dress'
    #     And I add item number '1' to the cart
    #     And I add item number '2' to the cart
    #     And I click on 'Checkout' from the item list page
    #     When I change the quantity of item number '2' to '2'
    #     And I remove item number '1' from the cart
    #     And I click on 'Proceed to checkout' from the checkout page
    #     Then the authentication page is loaded



    # Scenario: Add 2 items to cart, checkout and remove both
    #     Given I search for 'black dress'
    #     And I add item number '1' to the cart
    #     And I add item number '4' to the cart
    #     And I click on 'Checkout' from the item list page
    #     When I empty the shopping cart
    #     Then the 'Your shopping cart is empty.' message is disaplayed



    # Scenario: Add 1 item to cart, change quantity and check total price
    #     Given I search for 'black dress'
    #     And I add item number '2' to the cart
    #     And I click on 'Checkout' from the item list page
    #     When I change the quantity of item number '1' to '1000'
    #     Then the total price is '$50,992.00'



    # Scenario: Add 1 item to cart and change quantity to 0
    #     Given I search for 'black dress'
    #     And I add item number '1' to the cart
    #     And I click on 'Checkout' from the item list page
    #     When I change the quantity of item number '1' to '0'
    #     Then the 'Your shopping cart is empty.' message is disaplayed



    ################### AS AN REGISTERD USER ####################

    Scenario: Add 2 items to cart, remove 1, change quantity and checkout
        Given I navigate to the authentication page
        And I login as 'georgian.sas@gmail.com' with 'Avalon1234))))'
        And I search for 'black dress'
        And I add item number '1' to the cart
        And I add item number '2' to the cart
        And I click on 'Checkout' from the item list page
        When I change the quantity of item number '2' to '2'
        And I remove item number '1' from the cart
        And I click on 'Proceed to checkout' from the checkout page
        Then the 'Address' Order Step is loaded inside the login page
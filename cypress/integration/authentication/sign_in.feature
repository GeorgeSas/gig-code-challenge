Feature: Sign-In

    Following tests attempt to cover the basic functionality
    of the login page, with use cases ranging from the happy
    flow to most common edge scenarios.


    Scenario: Successfull sing-in
        Given I navigate to the authentication page
        And I input 'georgian.sas@gmail.com' in the Email Address field
        And I input 'Avalon1234))))' in the Password field
        When I click on the Sign In button
        Then I am logged in as 'George Sas'
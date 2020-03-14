@Authentication
Feature: Sign-In

    Following tests attempt to cover the basic functionality
    of the login page, with use cases ranging from the happy
    flow to most common edge scenarios.


    @Smoke
    Scenario: Successfull sing-in
        Given I navigate to the authentication page
        And I input 'georgian.sas@gmail.com' in the Email Address field
        And I input 'Avalon1234))))' in the Password field
        When I click on the Sign In button
        Then I am logged in as 'George Sas'


    @Regression
    Scenario: Sign-in with the wrong email address
        Given I navigate to the authentication page
        And I input 'wrong email' in the Email Address field
        And I input 'Fenrir1234))))' in the Password field
        When I click on the Sign In button
        Then the 'Invalid email address.' warning is triggered and displayed


    @Regression
    Scenario: Sign-in with the wrong password
        Given I navigate to the authentication page
        And I input 'georgian.sas@gmail.com' in the Email Address field
        And I input 'wrong password' in the Password field
        When I click on the Sign In button
        Then the 'Authentication failed.' warning is triggered and displayed


    @Regression
    Scenario: Sign-in with the wrong email address and password
        Given I navigate to the authentication page
        And I input 'wrong email' in the Email Address field
        And I input 'wrong password' in the Password field
        When I click on the Sign In button
        Then the 'Invalid email address.' warning is triggered and displayed


    @Regression
    Scenario: Sign-in without an email address
        Given I navigate to the authentication page
        And I input ' ' in the Email Address field
        And I input 'Avalon1234))))' in the Password field
        When I click on the Sign In button
        Then the 'An email address required.' warning is triggered and displayed


    @Regression
    Scenario: Sign-in without a password
        Given I navigate to the authentication page
        And I input 'georgian.sas@gmail.com' in the Email Address field
        And I input ' ' in the Password field
        When I click on the Sign In button
        Then the 'Password is required.' warning is triggered and displayed


    @Regression
    Scenario: Sign-in without an email address and a password
        Given I navigate to the authentication page
        And I input ' ' in the Email Address field
        And I input ' ' in the Password field
        When I click on the Sign In button
        Then the 'An email address required.' warning is triggered and displayed
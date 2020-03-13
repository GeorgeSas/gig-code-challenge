import { expect } from 'chai';

export default class Login {

    email = '#email';
    password = '#passwd'
    signIn = '#SubmitLogin > span'
    errorMessage = 'ol > li';

    authHeader = '.page-heading';
    summaryStep = '.step_done_last > a';
    shippingStep = '.four > span';
    addressStep = '.third > span';
    paymentStep = '#step_end > span';


    login(email, password) {
        cy
            .get(this.email)
            .type(email);
        cy
            .get(this.password)
            .type(password);
        cy
            .get(this.signIn)
            .click();
    }


    verifyTheActualErrorIs(expectedErrorMessage) {

        cy.get(this.errorMessage)
            .invoke('text')
            .then(txt => {
                expect(txt).to.equal(expectedErrorMessage);

            })
    }


    verifyAuthPageIsLoaded() {
        cy
            .get(this.email)
            .should('exist');
        cy
            .get(this.password)
            .should('exist');
    }


    verifyAuthIsWithinCheckoutProcess() {
        cy
            .get(this.summaryStep)
            .should('exist')
            .should('contain.text', '01. Summary');

        cy
            .get(this.addressStep)
            .should('exist')
            .should('contain.text', '03. Address');
        cy
            .get(this.shippingStep)
            .should('exist')
            .should('contain.text', '04. Shipping');

        cy
            .get(this.paymentStep)
            .should('exist')
            .should('contain.text', '05. Payment');
    }


    verifyOrderStepIsLoaded(orderStep) {

        switch (orderStep) {
            case 'Address':
                cy
                    .get(this.addressStep)
                    .should('exist')
                    .should('contain.text', '03. Address');
                break;
            case 'Payment':
                cy
                    .get(this.paymentStep)
                    .should('exist')
                    .should('contain.text', '05. Payment');
                break;
            default:
                console.log('Invalid option.');
                break;
        }
    }

}
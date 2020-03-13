import { expect } from 'chai';

export default class Login {

    email = '#email';
    password = '#passwd'
    signIn = '#SubmitLogin > span'
    errorMessage = 'ol > li';


    verifyTheActualErrorIs(expectedErrorMessage) {

        cy.get(this.errorMessage)
            .invoke('text')
            .then(txt => {
                expect(txt).to.equal(expectedErrorMessage);

            })
    }


}
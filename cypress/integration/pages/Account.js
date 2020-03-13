export default class Account {

    userInfo = '.account > span';

    verifyUserIsLoggedIn(user) {
        cy
            .get(this.userInfo)
            .should('have.text', user);
    }

}
export default class Landing {

    loginButton = '.login';
    searchField = '#search_query_top';
    searchButton = '#searchbox > .btn';

    navigateToTheLoginPage() {
        cy
            .get(this.loginButton)
            .click();
    }


    searchFor(item) {
        cy
            .get(this.searchField)
            .type(item);
        cy
            .get(this.searchButton)
            .click();
    }


}
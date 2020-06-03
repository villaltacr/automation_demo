describe('Login specs',()=>{
    it('should login as a register user ',()=>{
        cy.visit('/');
        cy.login(Cypress.env('username'),Cypress.env('password'));

    })

    it('should return an error when you attemp to create a user with an existing email ',()=>{
        cy.visit('/');
        cy.verifyUserAlreadyExists(Cypress.env('username'),Cypress.env('password'));
        
    });

    it('should return an error when you attemp to login with a user that does not exist',()=>{
        cy.visit('/');
        cy.verifyUserDoesNotExists();
        
    });

    it('should be able to create an account',()=>{
        cy.visit('/');
        cy.createAccount();
        
    })



})

describe("Validate Posts specs",()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.login(Cypress.env('username'),Cypress.env('password'));

    });

    it("should create a new post",()=>{
        cy.createNewPost();
    })
})
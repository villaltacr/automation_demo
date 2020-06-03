
import faker from 'faker';

const TITLE=":nth-child(1) > .form-control";
const ABOUT=":nth-child(2) > .form-control";
const ARTICLE=":nth-child(3) > .form-control"
const TAGS=":nth-child(4) > .form-control"


Cypress.Commands.add("createNewPost",()=>{
    cy.get('.nav-link').contains('New Post').click();
    cy.get(TITLE).type(faker.hacker.phrase());
    cy.get(ABOUT).type(faker.lorem.sentence());
    cy.get(ARTICLE).type(faker.lorem.paragraph());
    cy.get(TAGS).type(faker.lorem.word());
    cy.get(".btn").click();
    cy.get('.btn-outline-secondary').should('be.visible')




  
  })
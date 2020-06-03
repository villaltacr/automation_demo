import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import faker from 'faker';


addMatchImageSnapshotCommand();


const ACCOUNT_ERROR=".error-messages > li"



Cypress.Commands.add("createAccount",()=>{
  let userTxt = faker.internet.userName();
  let emailTxt = faker.internet.email();
  let passwdTxt = faker.internet.password();


  cy.get('.nav-link').contains('Sign up').click();

  cy.get('.form-group:nth-child(1) > .form-control').type(userTxt);
  cy.get('.form-group:nth-child(2) > .form-control').type(emailTxt);
  cy.get('.form-group:nth-child(3) > .form-control').type(passwdTxt);
  cy.get('.btn').click();
  cy.get('p').should('have.text','Popular Tags')


})



Cypress.Commands.add("login", (email, password) => {
  cy.get('.nav-link').contains('Sign in').click()
  cy.get('.form-group:nth-child(1) > .form-control').type(email);
  cy.get('.form-group:nth-child(2) > .form-control').type(password);
  cy.get('.btn').click();
  cy.get('p').should('have.text','Popular Tags')


});

Cypress.Commands.add("verifyUserAlreadyExists", (email,password) => {
  cy.get('.nav-link').contains('Sign up').click()
  cy.get('.form-group:nth-child(1) > .form-control').type('dvillalt@');
  cy.get('.form-group:nth-child(2) > .form-control').type(email);
  cy.get('.form-group:nth-child(3) > .form-control').type(password);
  cy.get('.btn').click();
  cy.get(ACCOUNT_ERROR).should('have.text','email has already been taken')

});

Cypress.Commands.add("verifyUserDoesNotExists", () => {
  let emailTxt = faker.internet.email();
  let passwdTxt = faker.internet.password();
  
  cy.get('.nav-link').contains('Sign in').click()
  cy.get('.form-group:nth-child(1) > .form-control').type(emailTxt);
  cy.get('.form-group:nth-child(2) > .form-control').type(passwdTxt);
  cy.get('.btn').click();
  cy.get(ACCOUNT_ERROR).should('have.text','email or password is invalid')
})




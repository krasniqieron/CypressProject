// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-xpath');
Cypress.Commands.add('login', (email, password) => {
    cy.xpath("//a[@data-cy='sign_in']/span[contains(text(),'Sign in')]")
      .should('be.visible')
      .click();
  
    cy.xpath("//input[@name='email']").type(email).should('have.value', email);
    cy.xpath("//input[@name='password']").type(password).should('have.value', password);
  
    cy.xpath("//input[@value='Sign in']")
      .should('be.visible')
      .click();
  });
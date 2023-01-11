/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'

declare global {
  namespace Cypress {
    interface Chainable {
      selectFrom(fromId: string): Chainable<void>;
      selectTo(toId: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('selectFrom', (fromId) => {
  cy.get(`#where-are-you-going ${fromId}`).click();
});

Cypress.Commands.add('selectTo', (toId) => {
  cy.get(`#to-where-are-you-going ${toId}`).click();
});
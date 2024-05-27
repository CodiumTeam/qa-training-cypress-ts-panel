/// <reference types="cypress" />

describe('Flights', () => {
  it('It works', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.title().should('contains', 'Codium Flights.');
    
  });
});

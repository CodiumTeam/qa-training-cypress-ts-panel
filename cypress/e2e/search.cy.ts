/// <reference types="cypress" />

describe('Flights', () => {
  it('Should be able to search for a flights from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2023-01-06');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2023-01-18');
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
  });
});

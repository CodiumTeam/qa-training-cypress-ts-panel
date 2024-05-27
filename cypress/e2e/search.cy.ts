/// <reference types="cypress" />

describe('Flights', () => {
  it('It works', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
cy.get('#where-are-you-going-portal').click();
cy.get('#where-are-you-going #madrid').click();
cy.get('#to-where-are-you-going-portal').click();
cy.get('#to-where-are-you-going #barcelona').click();
cy.get('.relative:nth-child(4) > .relative > .relative').type('2024-06-10');
cy.get('.relative:nth-child(5) > .relative > .relative').type('2024-06-17');
cy.get('#adults-add').click();
cy.get('.mt-5').click();
cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');

  });
});

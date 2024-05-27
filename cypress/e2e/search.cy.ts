/// <reference types="cypress" />

describe('Flights', () => {
  it('It works', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going-portal').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2024-05-16');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2024-05-23');
    cy.get('#adults-add path').click();
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    cy.get('.mr-8').should('contain', 'BCN')
    cy.get('.mr-8').should('contain', 'MAD')
    cy.get('.mr-8').should('contain', 'MAD') 
  });
});

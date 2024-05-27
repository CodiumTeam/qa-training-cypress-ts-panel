/// <reference types="cypress" />

describe('Flights', () => {
  it('It works', () => {
    cy.visit('https://qa-codium-course.netlify.app/search?from=BCN&to=MAD&checkIn=02%2F05%2F2024&checkOut=14%2F05%2F2024&guests-adults=1&guests-children=0&guests-infants=0');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going-portal').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2024-04-30');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2024-05-14');
    cy.get('#guest-button').click();
    cy.get('#guest-button').click();
    cy.get('#adults-add path').click();
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
    
  });
});

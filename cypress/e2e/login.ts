/// <reference types="cypress" />

describe('Flights', () => {
  it('It works', () => {
    cy.visit('https://qa-codium-course.netlify.app/search?from=MAD&to=BCN&checkIn=16%2F05%2F2024&checkOut=23%2F05%2F2024&guests-adults=2&guests-children=0&guests-infants=0');
    cy.get('.py-1').click();
    cy.get('.mb-4 .pl-2').click();
    cy.get('.mb-4 .pl-2').type('info@codium.team');
    cy.get('.flex:nth-child(4) .pl-2').click();
    cy.get('.flex:nth-child(4) .pl-2').type('codiumTest');
    cy.get('.block').click();
    cy.get('.bg-white:nth-child(1)').submit();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/');    
  });
});

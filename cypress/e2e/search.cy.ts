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
  });

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
    cy.get('.py-1').should('contain', 'Log out')
  });
});

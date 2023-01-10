/// <reference types="cypress" />

describe('Flights', () => {
  it('Should search flights from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2023-01-11');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2023-01-18');
    cy.get('.mt-5').click();
    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
  });

  it('Should show from - to dates in searched bar for a flight from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2023-01-11');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2023-01-18');
    cy.get('.mt-5').click();
    cy.get('.icon-input:nth-child(1) > input').dblclick();
    cy.get('.mt-4 > input').dblclick();
  });

  it('Should list selectable routes flights prices for a flight from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');
    cy.get('#where-are-you-going-portal').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.get('.relative:nth-child(4) > .relative > .relative').type('2023-01-11');
    cy.get('.relative:nth-child(5) > .relative > .relative').type('2023-01-18');
    cy.get('.mt-5').click();
    cy.get('.icon-input:nth-child(1) > input').dblclick();
    cy.get('.flight-card:nth-child(1) .flight-card__price').dblclick();
    cy.get('.flight-card:nth-child(2) .flight-card__price').dblclick();
    cy.get('.flight-card:nth-child(3) .flight-card__price').dblclick();
    cy.get('.flight-card:nth-child(4) .flight-card__price').dblclick();
  });
});

/// <reference types="cypress" />

describe('Flights', () => {
  it('Should search flights from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');

    cy.findByLabelText('From').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.findByPlaceholderText('Check in').type('2023-01-11');
    cy.findByPlaceholderText('Check out').type('2023-01-18');
    cy.findByRole('button', {name: 'Search'}).click();

    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
  });

  it('Should show from - to dates in searched bar for a flight from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');

    cy.findByLabelText('From').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.findByPlaceholderText('Check in').type('2023-01-11');
    cy.findByPlaceholderText('Check out').type('2023-01-18');
    cy.findByRole('button', {name: 'Search'}).click();

    cy.findByDisplayValue('11/01/2023').dblclick();
    cy.findByDisplayValue('18/01/2023').dblclick();
  });

  it('Should list selectable routes flights prices for a flight from Madrid to Barcelona', () => {
    cy.visit('https://qa-codium-course.netlify.app/');

    cy.findByLabelText('From').click();
    cy.get('#where-are-you-going #madrid').click();
    cy.get('#to-where-are-you-going #barcelona').click();
    cy.findByPlaceholderText('Check in').type('2023-01-11');
    cy.findByPlaceholderText('Check out').type('2023-01-18');
    cy.findByRole('button', {name: 'Search'}).click();

    cy.findByText('93').dblclick();
    cy.findByText('68').dblclick();
    cy.findByText('82').dblclick();
    cy.findByText('91').dblclick();
  });
});

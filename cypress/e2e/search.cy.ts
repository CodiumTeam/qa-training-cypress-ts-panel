/// <reference types="cypress" />

describe('Flights', () => {
  beforeEach(() => {
    cy.visit('https://qa-codium-course.netlify.app/');
  });

  it('Should search flights from Madrid to Barcelona', () => {
    cy.findByLabelText('From').click();
    cy.selectFrom('#madrid');
    cy.selectTo('#barcelona');
    cy.findByPlaceholderText('Check in').type('2023-01-11');
    cy.findByPlaceholderText('Check out').type('2023-01-18');
    cy.findByRole('button', {name: 'Search'}).click();

    cy.url().should('contains', 'https://qa-codium-course.netlify.app/search');
  });

  describe('In search page', () => {
    beforeEach(() => {
      cy.findByLabelText('From').click();
      cy.get('#where-are-you-going #madrid').click();
      cy.get('#to-where-are-you-going #barcelona').click();
      cy.findByPlaceholderText('Check in').type('2023-01-11');
      cy.findByPlaceholderText('Check out').type('2023-01-18');
      cy.findByRole('button', {name: 'Search'}).click();
    });

    it('Should show from - to dates in searched bar for a flight from Madrid to Barcelona', () => {
      cy.findByDisplayValue('11/01/2023').should('be.visible');
      cy.findByDisplayValue('18/01/2023').should('be.visible');
    });

    it('Should list selectable routes flights prices for a flight from Madrid to Barcelona', () => {
      cy.findByText('93').should('be.visible');
      cy.findByText('68').should('be.visible');
      cy.findByText('82').should('be.visible');
      cy.findByText('91').should('be.visible');
    });
  });
});

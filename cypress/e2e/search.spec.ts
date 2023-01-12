import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

const selectors = {
  'Madrid': '#madrid',
  'Ibiza': '#ibiza',
  'Barcelona': '#barcelona',
  'Mallorca': '#mallorca'
}

When(/^the customer enter "(.*)" to "(.*)" in the search field and submits the form$/, (origin: keyof typeof selectors, destination: keyof typeof selectors) => {
  cy.findByLabelText('From').click();
  cy.selectFrom(selectors[origin]);
  cy.selectTo(selectors[destination]);
  cy.findByPlaceholderText('Check in').type('2023-01-11');
  cy.findByPlaceholderText('Check out').type('2023-01-18');
  cy.findByRole('button', {name: 'Search'}).click();
});

Then(/^a list of flights from (.*) to (.*) is displayed$/, (origin, destination) => {
  cy.findByText(`From ${origin} to ${destination}`).should('be.visible');
  cy.findAllByRole('button', {name: 'Select'}).should('have.length', 4);
});
Then(/^the list includes the price and duration$/, () => {
  cy.findByText('93').should('be.visible');
  cy.findByText('68').should('be.visible');
  cy.findByText('82').should('be.visible');
  cy.findByText('91').should('be.visible');
});


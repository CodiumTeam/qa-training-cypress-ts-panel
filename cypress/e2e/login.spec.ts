import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the homepage", () => {
  cy.visit('https://qa-codium-course.netlify.app/')
});

When("the user clicks on the Login button", () => {
  cy.findByText('Log in').click();
});

Then("the login page is displayed", () => {
  cy.url()
    .should(
      'eq',
      'https://qa-codium-course.netlify.app/login'
    )
});
Given("I am on the login page", () => {
  cy.visit('https://qa-codium-course.netlify.app/login');
});

When("I enter valid username and password", () => {
  cy.findByPlaceholderText('Email Address').type(`info@codium.team`);
  cy.findByPlaceholderText('Password').type('codiumTest');
});

When("I click on the login button", () => {
  cy.findByRole('button', {name: 'Login'}).click();
});

Then("I should be logged in and directed to the home page", () => {
  cy.url().should('eq', 'https://qa-codium-course.netlify.app/');
});
When("I leave the password field empty", () => {
  cy.findByPlaceholderText('Email Address').type(`info@codium.team`);
  cy.findByPlaceholderText('Password').clear();
});

When("I leave the email field empty", () => {
  cy.findByPlaceholderText('Email Address').clear();
  cy.findByPlaceholderText('Password').type('aPassword');
});

Then("I should see an error message stating that the fields are required", () => {
  cy.findByText('Required').should('be.visible');
});
When("I enter a valid username", () => {
  cy.findByPlaceholderText('Email Address').type(`info@codium.team`);
});
When("I enter invalid password", () => {
  cy.findByPlaceholderText('Password').type('invalidPassword');
});
Then(/^I should see an error message stating that my login attempt was unsuccessful$/, function () {
  cy.findByText('Invalid credentials').should('be.visible');
});
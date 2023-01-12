import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the homepage", function () {
  cy.visit('https://qa-codium-course.netlify.app/')
});

When("the user clicks on the Login button", function () {
  cy.findByText('Log in').click();
});

Then("the login page is displayed", function () {
  cy.url()
    .should(
      'eq',
      'https://qa-codium-course.netlify.app/login'
    )
});
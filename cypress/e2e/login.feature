Feature: Login
  As a customer
  I want access to login page from Home page or by url
  So that I can log in

  Scenario: Access login page from homepage
    Given the user is on the homepage
    When the user clicks on the Login button
    Then the login page is displayed

  Scenario: Login with valid credentials
    Given I am on the login page
    When I enter valid username and password
    And I click on the login button
    Then I should be logged in and directed to the home page

  Scenario: Login with empty password credentials
    Given I am on the login page
    When I leave the password field empty
    And I click on the login button
    Then I should see an error message stating that the fields are required

  Scenario: Login with empty email credentials
    Given I am on the login page
    When I leave the email field empty
    And I click on the login button
    Then I should see an error message stating that the fields are required
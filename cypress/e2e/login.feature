Feature: Homepage login
 As a customer
 I want access to login page from Home page
 So that I can log in

 Scenario: Access login page from homepage
   Given the user is on the homepage
   When the user clicks on the Login button
   Then the login page is displayed
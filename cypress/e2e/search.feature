Feature: Search for flights
  As a first time customer,
  I want to be able to search a flight from different places and see a list of available flights,
  so that I can easily find a flight that meets my needs.

  Background:
    Given the user is on the homepage
  Scenario Outline: Search for flights by destination
    When the customer enter "<origin>" to "<destination>" in the search field and submits the form
    Then a list of flights from <origin> to <destination> is displayed
    And the list includes the price and duration
    Examples:
      | origin    | destination |
      | Madrid    | Ibiza	    |
      | Barcelona | Mallorca    |

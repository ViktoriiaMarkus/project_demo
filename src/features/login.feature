Feature: Login form validation on Saucedemo

  @smoke
  Scenario: Test Login form with empty credentials
    Given I am on the login page
    When I enter credentials with username "Viktoriia" and password "12345678"
    And I clear the login form fields
    And I click the login button
    Then I should see the error message "Username is required."

  @smoke
  Scenario: Test Login form with credentials by passing Username
    Given I am on the login page
    When I enter credentials with username "standard_user" and password "secret_sauce"
    And I clear the password field
    And I click the login button
    Then I should see the error message "Password is required."

  @smoke
  Scenario: Test Login form with credentials by passing Username & Password
    Given I am on the login page
    When I enter credentials with username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should see the page title as "Swag Labs"
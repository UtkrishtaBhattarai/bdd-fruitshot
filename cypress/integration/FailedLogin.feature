Feature: FailedLogin

  I enter incorrect credentials
  
  @smoke
  Scenario: Incorrect Credential
    Given I open Conduit login page
    When I type in
        |  email  | password  |
        |  zurepaxaci@mailinator.com | zurepaxaci@.com  |
    And I click on LOGIN button
    Then "Login" should be shown
     
Feature: Login

  I want to log into Conduit
  
  @smoke
  Scenario: Conduit Login
    Given I open Conduit login page
    When I type in
        |  email  | password  |
        |  zurepaxaci@mailinator.com | zurepaxaci@mailinator.com  |
    And I click on LOGIN button
    Then "Fruitshot" should be shown
     
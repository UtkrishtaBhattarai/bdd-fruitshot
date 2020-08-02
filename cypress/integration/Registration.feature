Feature: Register

  I open Conduit register page
  
  @smoke
  Scenario: Conduct Register
    Given I open Conduit register page
    When I type in
        |  fname  | lname  |  address  | email  | number  | password  |
        |  ram  | shyaam  |  kapan  | ram@ramram.com  | +1 (793) 925-6257  | ramramra  |
    And I click on REGISTER button
    Then "Welcome User" should be shown
     
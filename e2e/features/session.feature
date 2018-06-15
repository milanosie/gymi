Feature: Adding gym sessions
  As a user of the app
  I want to be able to add my gym sessions
  So I can keep track of the progress and share them with my friends


  Scenario: Navigating to the add modal
    Given I am logged in as user "test" with password "test12345"
    When I click the "Sessions" tab
    And I click the plus fab
    Then I am on the "new-session" page
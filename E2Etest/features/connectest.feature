Feature: Testing the App component



  Scenario: Entering a name and submitting the form
    Given I visit the localhost:3000 
    When I enter the name "John Doe" in the text field
    And I click the submit button
    Then I should see the message "Submitted Name: John Doe"

 

  Scenario: Remove the list of name 
    Given I have a list of name
    When I click the button
    Then I should remove the name list
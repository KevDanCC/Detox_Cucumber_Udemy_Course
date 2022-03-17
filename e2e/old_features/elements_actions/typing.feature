Feature: Typing into input elements
As a user I can type in suitable elements

@actions @typing
Scenario: I can type in an input field
Given I tap on the 'Members' section
When I tap the Add Member Icon
Then I type 'Kevin' as Name and 'Test' as Surname
And I replace 'Test' in Name and 'Kevin' in Surname
Then I enter 'Kevin' in Name and 'Test' in Surname
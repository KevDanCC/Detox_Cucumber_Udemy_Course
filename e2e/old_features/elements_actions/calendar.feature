Feature: Dates can be set in calendar
As a user I can set a date using calendar

@actions @calendar
Scenario: I can select a date from the calendar
Given I tap on the 'Members' section
When I tap the Add Member Icon
Then I select 'Friday' '22' 'July' '2022' date in the Calendar

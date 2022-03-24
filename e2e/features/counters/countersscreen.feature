Feature: Counters are correctly displayed and we can tap on it

    I can check the screen that are correctly displayed, and I can tap on it, and Check the value

    Background: I can navigate to the Counters screen
        Given I tap on the 'Counters' Home section
       


       @counters @tapping
       Scenario: The Counters screen is correctly displayed and touchable
        When I check the displayed elements
        And I tap over the "<button>" button and check the <number> numbers of tap
        Then I tap the back button
        Examples:
            | button      | number |
            | wwater       | 4      |
            # | electricity | 2      |
            # | gas         | 6      |
            # | broadband   | 8      |
        
        

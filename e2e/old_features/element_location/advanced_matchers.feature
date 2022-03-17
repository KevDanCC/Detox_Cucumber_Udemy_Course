Feature: Advanced matchers

    Elements can be mathced dynamically and navigation elements can be located


    @advancedmatchers @dynamic
    Scenario: Home sections can be matched dynamically
        Given I tap on the "<section>" section

        Examples:
            | section   |
            | Counters  |
            | Members   |
            | Cities    |
            | Animation |

    @advancedmatchers @list
    Scenario: List element can be matched dynamically
        Given I tap on the "Cities" section
        Then I tap on the "<continent>" title and image
        Examples:
            | continent |
            | europe    |
            | usacanada |
    # | asia      |


    @advancedmatchers  @headers
    Scenario: I can match elements in nagivation headers
        Given I tap on the 'Members' section
        Then I tap the Add Member Icon


    @advancedmatchers @navigationtab
    Scenario: I can locate elements in the navigation tabs
        Given I tap on the Cities navigation
        And I tap on the Members navigation
        Then I tap on the Home navigation


    @advancedmatchers @navigationtab-switch
    Scenario: I can locate elements in the navigation tabs
        Given I tap on the "<option>" navigation
        Then I tap on the "<option2>" navigation
        Examples:
            | option  | option2 |
            | Cities  | Members |
            | Members | Cities  |
            | Home    | Cities  |




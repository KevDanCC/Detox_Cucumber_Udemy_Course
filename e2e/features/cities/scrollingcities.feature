Feature: Cities images are correctly displayed and scrollable

    I can view the images and labels from 4 cities in Europe, USA/Canada and Asia.

    Background: I can navigate to the Cities screen
        Given I tap on the 'Cities' Home section


    @cities @navigation @testerone
    Scenario: the Cities screen is correctyle displayed
        When the Cities page is correctly displayed
        And I tap the back button
        Then the Home page is correctly displayed


    @cities @scrolling
    Scenario: I can scroll through images in the different continents
        When I scroll "<continent>" at 100 pixels "<direction>" to image number <number>
        Then I scroll "<continent>" at 100 pixels "<direction_2>" to image number <number_2>

        Examples:
            | continent | direction | number | direction_2 | number_2 |
            | Europe    | right     | 4      | left        | 2        |
            | USACanada | right     | 3      | left        | 1        |
            | Asia      | right     | 4      | left        | 1        |

    @cities  @scrolling
    Scenario: I can scroll vertically to edges
        When I scroll 'europe' to the 'right'
        Then I scroll 'europe' to the 'left'
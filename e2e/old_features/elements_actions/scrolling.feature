Feature: Scrolling can be carried out
As a user I can scroll vertically and horizontally

@actions @scrolling @verticalscrolling
Scenario: I can scroll vertically
Given I tap on the 'Members' section
And I tap the Add Member Icon
When I scroll 'formBackground' 350 pixels 'down'
When I scroll 'formBackground' 350 pixels 'up'
When I scroll 'formBackground' 350 pixels 'down' with X: 0.9 and Y: 0.1
Then I scroll 'formBackground' 350 pixels 'up' with X: 0.2 and Y: 0.9
 

@actions @scrollingTo @verticalscrolling
Scenario: I can scroll vertically to edges
Given I tap on the 'Members' section
And I tap the Add Member Icon
When I scroll 'formBackground' to the 'bottom'
Then I scroll 'formBackground' to the 'top'



@actions @scrolling @verticalscrolling 
Scenario: I can scroll vertically to edges
Given I tap on the 'Members' section
And I tap the Add Member Icon
When I scroll 'formBackground' to 'formLabel-startDate' at 50 pixels 'down'
When I scroll 'formBackground' to 'formLabel-surname' at 50 pixels 'up'


@actions @scrolling @horizontalscrolling
Scenario: I can scroll horizontally on a FlatList
Given I tap on the 'Cities' section
When I scroll 'imageBackground-europe' to 'image-europe-3' at 30 pixels 'right'
Then I scroll 'imageBackground-europe' to 'image-europe-0' at 30 pixels 'left' 
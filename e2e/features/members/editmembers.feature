Feature: Edit Member

    Members can be edited via the add member form

    Background: I navigate to the Add Member Form
        Given I tap on the 'Members' navigation tab section
        And I tap the Add Member icon

    @members @editmembers
    Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with:
            | name   | surname | b_day   | b_month   | b_year   | address_one    | address_two    | city      | postcode | country   | start_hour   | start_minute   | member        |
            | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2 | Test city | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members
        When I tap on the Member number <memberCount>
        And I tap on the Edit Member icon
        Then the Edit Member page is correctly displayed with:
            | name   | surname | b_day   | b_month   | b_year   | address_one    | address_two    | city      | postcode | country   | start_hour   | start_minute   | member        |
            | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2 | Test city | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        When I fill in the form with:
            | name     | surname   | b_day     | b_month     | b_year     | address_one         | address_two         | city           | postcode    | country     | start_hour     | start_minute     | member        |
            | <name_2> | Test Edit | <b_day_2> | <b_month_2> | <b_year_2> | Test Address 1 Edit | Test Address 2 Edit | Test city Edit | test1n Edit | <country_2> | <start_hour_2> | <start_minute_2> | <memberCount> |
        Then the Show Member page is correctly displayed with:
            | name     | surname   | b_day     | b_month     | b_year     | address_one         | address_two         | city           | postcode    | country     | start_hour     | start_minute     | member        |
            | <name_2> | Test Edit | <b_day_2> | <b_month_2> | <b_year_2> | Test Address 1 Edit | Test Address 2 Edit | Test city Edit | test1n Edit | <country_2> | <start_hour_2> | <start_minute_2> | <memberCount> |
        When I tap the back button
        Then the Member List page is correctly displayed for <memberCount> members
        Examples:
            | name  | b_day | b_month | b_year | country | start_hour | start_minute | name_2 | b_day_2 | b_month_2 | b_year_2 | country_2 | start_hour_2 | start_minute_2 | memberCount |
            | Kevin | 20    | 09      | 1981   | Canada  | 19         | 32           | Daniel | 06      | 04        | 1995     | Andorra   | 17           | 45             | 1           |

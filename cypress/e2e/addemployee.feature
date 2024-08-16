Feature: Verify Add Employee functionality

    Add employee positive and nagative tests
    Background: login
        Given User Launch the Application
        When  User enter username as "Admin" password as "admin123"
        And   User clicks on login Button
        Then  User should be navigated to Dashbaord page

    Scenario Outline: Verify Add employee with mandotory details
        Then  User create Employee with firname as "<firstname>" and lastname as "<lastname>"
        Examples:
            | firstname | lastname |
            | Raju      | G        |
            # | Mahesh    | k        |
            # | Girish    | abc        |
    Scenario: Verify Add employee without mandotory details
        When  User clicks on PIM
        And   User clicks on Add Employee submenu
        And  User clicks on save button
        Then user should get error messages for Mandotory fileds
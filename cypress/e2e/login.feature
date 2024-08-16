Feature: Verify Login functionality

    Scenario: Verify Login with Valid credentials

        Given User Launch the Application
        When  User enter username as "Admin" password as "admin123"
        And   User clicks on login Button
        Then  User should be navigated to Dashbaord page

    # Scenario: Verify Login with Valid username and Invalid Password

    #     Given User Launch the Application
    #     When  User enter username as "Admin" password as "dghjh"
    #     And   User clicks on login Button
    #     Then  User should get login error message

    # Scenario: Verify Login with inalid username and valid Password

    #     Given User Launch the Application
    #     When  User enter username as "gnmbjhg" password as "admin123"
    #     And   User clicks on login Button
    #     Then  User should get login error message

    # Scenario: Verify Login with inalid username and invalid Password

    #     Given User Launch the Application
    #     When  User enter username as "gnmbjhg" password as "dfkjgh"
    #     And   User clicks on login Button
    #     Then  User should get login error message

    Scenario Outline: Verify Login Invalid Test data

        Given User Launch the Application
        When  User enter username as "<username>" password as "<password>"
        And   User clicks on login Button
        Then  User should get login error message

        Examples:
            | username | password |
            | fvbhf    | admin123 |
            | Admin    | ffhfb    |
            | Admfgjin | ffhfb    |
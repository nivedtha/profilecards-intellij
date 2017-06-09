Feature: Save Profile Cards Configuration

  Background:
    Given I navigate to the form

  Scenario: Email Checked
    Given the "email" is checked
    When the form is submitted
    Then I'm redirected to the main page

  Scenario: Education Checked
    Given the "education" is checked
    When the form is submitted
    Then the configuration is saved
    And I'm redirected to the main page

  Scenario: Projects Checked
    Given the "projects" is checked
    When the form is submitted
    Then the configuration is saved
    And I'm redirected to the main page






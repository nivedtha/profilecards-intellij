$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SaveProfileCardsConfiguration.feature");
formatter.feature({
  "line": 1,
  "name": "Save Profile Cards Configuration",
  "description": "",
  "id": "save-profile-cards-configuration",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.iNavigateToTheForm()"
});
formatter.result({
  "duration": 3209904983,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Email Checked",
  "description": "",
  "id": "save-profile-cards-configuration;email-checked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the \"email\" is checked",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I\u0027m redirected to the main page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 5
    }
  ],
  "location": "SaveProfileCardsConfigurationStepDefs.theIsChecked(String)"
});
formatter.result({
  "duration": 105844935,
  "status": "passed"
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.theFormIsSubmitted()"
});
formatter.result({
  "duration": 70750254,
  "status": "passed"
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.iMRedirectedToTheMainPage()"
});
formatter.result({
  "duration": 227172546,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Profile Card]s\u003e but was:\u003c[Configure Profile]s\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat SaveProfileCardsConfigurationStepDefs.iMRedirectedToTheMainPage(SaveProfileCardsConfigurationStepDefs.java:57)\r\n\tat ✽.Then I\u0027m redirected to the main page(SaveProfileCardsConfiguration.feature:9)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.iNavigateToTheForm()"
});
formatter.result({
  "duration": 59903583,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Education Checked",
  "description": "",
  "id": "save-profile-cards-configuration;education-checked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "the \"education\" is checked",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the configuration is saved",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I\u0027m redirected to the main page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "education",
      "offset": 5
    }
  ],
  "location": "SaveProfileCardsConfigurationStepDefs.theIsChecked(String)"
});
formatter.result({
  "duration": 97514265,
  "status": "passed"
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.theFormIsSubmitted()"
});
formatter.result({
  "duration": 65371140,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.iMRedirectedToTheMainPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the form",
  "keyword": "Given "
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.iNavigateToTheForm()"
});
formatter.result({
  "duration": 143540064,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Projects Checked",
  "description": "",
  "id": "save-profile-cards-configuration;projects-checked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the \"projects\" is checked",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the form is submitted",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the configuration is saved",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I\u0027m redirected to the main page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "projects",
      "offset": 5
    }
  ],
  "location": "SaveProfileCardsConfigurationStepDefs.theIsChecked(String)"
});
formatter.result({
  "duration": 107296048,
  "status": "passed"
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.theFormIsSubmitted()"
});
formatter.result({
  "duration": 68450697,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "SaveProfileCardsConfigurationStepDefs.iMRedirectedToTheMainPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ShowAllProfileCards.feature");
formatter.feature({
  "line": 1,
  "name": "Show All Profile Cards",
  "description": "As a user\r\nI want to see all existing profile cards \r\nSo that I can obtain meaningful information about each members\u0027 profile cards",
  "id": "show-all-profile-cards",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Accessing the website\u0027s main page",
  "description": "",
  "id": "show-all-profile-cards;accessing-the-website\u0027s-main-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to access the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "main page is reached",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see all profile cards in their default configuration",
  "keyword": "Then "
});
formatter.match({
  "location": "ShowAllProfileCardsStepDefs.iWantToAccessTheMainPage()"
});
formatter.result({
  "duration": 2304680135,
  "status": "passed"
});
formatter.match({
  "location": "ShowAllProfileCardsStepDefs.mainPageIsReached()"
});
formatter.result({
  "duration": 10533783,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Profile Card]s\u003e but was:\u003c[Configure Profile]s\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat ShowAllProfileCardsStepDefs.mainPageIsReached(ShowAllProfileCardsStepDefs.java:45)\r\n\tat ✽.When main page is reached(ShowAllProfileCards.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShowAllProfileCardsStepDefs.iSeeAllProfileCardsInTheirDefaultConfiguration()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "A member has information in all existing fields",
  "description": "",
  "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "\"\u003cmemberName\u003e\" has information in all existing fields",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "main page is reached",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see all profile cards with information about \"\u003cmemberName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;",
  "rows": [
    {
      "cells": [
        "memberName"
      ],
      "line": 17,
      "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;1"
    },
    {
      "cells": [
        "Carlos"
      ],
      "line": 18,
      "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;2"
    },
    {
      "cells": [
        "João"
      ],
      "line": 19,
      "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;3"
    },
    {
      "cells": [
        "Tiago"
      ],
      "line": 20,
      "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;4"
    },
    {
      "cells": [
        "Nivi"
      ],
      "line": 21,
      "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "A member has information in all existing fields",
  "description": "",
  "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "\"Carlos\" has information in all existing fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "main page is reached",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see all profile cards with information about \"Carlos\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos",
      "offset": 1
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.hasInformationInAllExistingFields(String)"
});
formatter.result({
  "duration": 70778254,
  "status": "passed"
});
formatter.match({
  "location": "ShowAllProfileCardsStepDefs.mainPageIsReached()"
});
formatter.result({
  "duration": 6186225,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Profile Card]s\u003e but was:\u003c[Configure Profile]s\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat ShowAllProfileCardsStepDefs.mainPageIsReached(ShowAllProfileCardsStepDefs.java:45)\r\n\tat ✽.When main page is reached(ShowAllProfileCards.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos",
      "offset": 48
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.iSeeAllProfileCardsWithInformationAbout(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "A member has information in all existing fields",
  "description": "",
  "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "\"João\" has information in all existing fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "main page is reached",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see all profile cards with information about \"João\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "João",
      "offset": 1
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.hasInformationInAllExistingFields(String)"
});
formatter.result({
  "duration": 87187594,
  "status": "passed"
});
formatter.match({
  "location": "ShowAllProfileCardsStepDefs.mainPageIsReached()"
});
formatter.result({
  "duration": 10961338,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Profile Card]s\u003e but was:\u003c[Configure Profile]s\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat ShowAllProfileCardsStepDefs.mainPageIsReached(ShowAllProfileCardsStepDefs.java:45)\r\n\tat ✽.When main page is reached(ShowAllProfileCards.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "João",
      "offset": 48
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.iSeeAllProfileCardsWithInformationAbout(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "A member has information in all existing fields",
  "description": "",
  "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "\"Tiago\" has information in all existing fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "main page is reached",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see all profile cards with information about \"Tiago\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago",
      "offset": 1
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.hasInformationInAllExistingFields(String)"
});
formatter.result({
  "duration": 77101812,
  "status": "passed"
});
formatter.match({
  "location": "ShowAllProfileCardsStepDefs.mainPageIsReached()"
});
formatter.result({
  "duration": 4835558,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Profile Card]s\u003e but was:\u003c[Configure Profile]s\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat ShowAllProfileCardsStepDefs.mainPageIsReached(ShowAllProfileCardsStepDefs.java:45)\r\n\tat ✽.When main page is reached(ShowAllProfileCards.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago",
      "offset": 48
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.iSeeAllProfileCardsWithInformationAbout(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "A member has information in all existing fields",
  "description": "",
  "id": "show-all-profile-cards;a-member-has-information-in-all-existing-fields;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "\"Nivi\" has information in all existing fields",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "main page is reached",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see all profile cards with information about \"Nivi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nivi",
      "offset": 1
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.hasInformationInAllExistingFields(String)"
});
formatter.result({
  "duration": 96623154,
  "status": "passed"
});
formatter.match({
  "location": "ShowAllProfileCardsStepDefs.mainPageIsReached()"
});
formatter.result({
  "duration": 5286669,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Profile Card]s\u003e but was:\u003c[Configure Profile]s\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat ShowAllProfileCardsStepDefs.mainPageIsReached(ShowAllProfileCardsStepDefs.java:45)\r\n\tat ✽.When main page is reached(ShowAllProfileCards.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivi",
      "offset": 48
    }
  ],
  "location": "ShowAllProfileCardsStepDefs.iSeeAllProfileCardsWithInformationAbout(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ShowProfileCardDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Show Profile Card Details",
  "description": "As a user \r\nI want to be able to check a profile card details\r\nSo that I can access all the details about a members\u0027 profile card",
  "id": "show-profile-card-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Member Name Clicked",
  "description": "",
  "id": "show-profile-card-details;member-name-clicked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the \"\u003cmember_name\u003e\" is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I\u0027m redirected to the \"\u003cmember_name\u003e\" profile card",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "show-profile-card-details;member-name-clicked;",
  "rows": [
    {
      "cells": [
        "member_name"
      ],
      "line": 12,
      "id": "show-profile-card-details;member-name-clicked;;1"
    },
    {
      "cells": [
        "Carlos Ferreira"
      ],
      "line": 13,
      "id": "show-profile-card-details;member-name-clicked;;2"
    },
    {
      "cells": [
        "João Silva"
      ],
      "line": 14,
      "id": "show-profile-card-details;member-name-clicked;;3"
    },
    {
      "cells": [
        "Nivedhita Gowthaman"
      ],
      "line": 15,
      "id": "show-profile-card-details;member-name-clicked;;4"
    },
    {
      "cells": [
        "Tiago Monteiro"
      ],
      "line": 16,
      "id": "show-profile-card-details;member-name-clicked;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Member Name Clicked",
  "description": "",
  "id": "show-profile-card-details;member-name-clicked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the \"Carlos Ferreira\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I\u0027m redirected to the \"Carlos Ferreira\" profile card",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 4130816947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 175608078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 23
    }
  ],
  "location": "ShowProfileCardsStepDefs.iMRedirectedToTheProfileCard(String)"
});
formatter.result({
  "duration": 14533340,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Member Name Clicked",
  "description": "",
  "id": "show-profile-card-details;member-name-clicked;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the \"João Silva\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I\u0027m redirected to the \"João Silva\" profile card",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 306332136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Silva",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 121201832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Silva",
      "offset": 23
    }
  ],
  "location": "ShowProfileCardsStepDefs.iMRedirectedToTheProfileCard(String)"
});
formatter.result({
  "duration": 6455558,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Member Name Clicked",
  "description": "",
  "id": "show-profile-card-details;member-name-clicked;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the \"Nivedhita Gowthaman\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I\u0027m redirected to the \"Nivedhita Gowthaman\" profile card",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 225784544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhita Gowthaman",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 124960500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhita Gowthaman",
      "offset": 23
    }
  ],
  "location": "ShowProfileCardsStepDefs.iMRedirectedToTheProfileCard(String)"
});
formatter.result({
  "duration": 9471559,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Member Name Clicked",
  "description": "",
  "id": "show-profile-card-details;member-name-clicked;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the \"Tiago Monteiro\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I\u0027m redirected to the \"Tiago Monteiro\" profile card",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 207757870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Monteiro",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 121828054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Monteiro",
      "offset": 23
    }
  ],
  "location": "ShowProfileCardsStepDefs.iMRedirectedToTheProfileCard(String)"
});
formatter.result({
  "duration": 5432892,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the \"\u003cmember_name\u003e\" is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see the name \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "show-profile-card-details;show-member-details;",
  "rows": [
    {
      "cells": [
        "member_name",
        "name"
      ],
      "line": 24,
      "id": "show-profile-card-details;show-member-details;;1"
    },
    {
      "cells": [
        "Carlos Ferreira",
        "Carlos Ferreira"
      ],
      "line": 25,
      "id": "show-profile-card-details;show-member-details;;2"
    },
    {
      "cells": [
        "João Silva",
        "João Manuel Reis Belo Silva"
      ],
      "line": 26,
      "id": "show-profile-card-details;show-member-details;;3"
    },
    {
      "cells": [
        "Nivedhita Gowthaman",
        "Nivedhitha Malarvizhi.G"
      ],
      "line": 27,
      "id": "show-profile-card-details;show-member-details;;4"
    },
    {
      "cells": [
        "Tiago Monteiro",
        "Tiago Ferreira Monteiro"
      ],
      "line": 28,
      "id": "show-profile-card-details;show-member-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the \"Carlos Ferreira\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see the name \"Carlos Ferreira\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 217495208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 126295612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 34
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheName(String)"
});
formatter.result({
  "duration": 51114244,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the \"João Silva\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see the name \"João Manuel Reis Belo Silva\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 237932995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Silva",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 125650278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Manuel Reis Belo Silva",
      "offset": 34
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheName(String)"
});
formatter.result({
  "duration": 34116904,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the \"Nivedhita Gowthaman\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see the name \"Nivedhitha Malarvizhi.G\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 206989870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhita Gowthaman",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 103183157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhitha Malarvizhi.G",
      "offset": 34
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheName(String)"
});
formatter.result({
  "duration": 32524903,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the \"Tiago Monteiro\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see the name \"Tiago Ferreira Monteiro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 205403202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Monteiro",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 114873385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Ferreira Monteiro",
      "offset": 34
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheName(String)"
});
formatter.result({
  "duration": 45371576,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the \"\u003cmember_name\u003e\" is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be able to see the short bio \"\u003cshort_bio\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "show-profile-card-details;show-member-details;",
  "rows": [
    {
      "cells": [
        "member_name",
        "short_bio"
      ],
      "line": 36,
      "id": "show-profile-card-details;show-member-details;;1"
    },
    {
      "cells": [
        "Carlos Ferreira",
        "Hi! My name is Carlos Ferreira. I\u0027m enrolled in the master\u0027s degree in mobile computing of School of Technology and Management of Polytechnic Institute of Leiria and I\u0027m working on a enterprise near of the School."
      ],
      "line": 37,
      "id": "show-profile-card-details;show-member-details;;2"
    },
    {
      "cells": [
        "João Silva",
        "Hello! Right now, i\u0027m on the first year of a master degree in Mobile Computing at Polytechnic Institute of Leiria. I also took my bachelor on this institute. If i could i would travel all around the world!"
      ],
      "line": 38,
      "id": "show-profile-card-details;show-member-details;;3"
    },
    {
      "cells": [
        "Nivedhita Gowthaman",
        "Fitsrly,I have done my Bachelor\u0027s in electronics engineer and Master of engineering in VLSI design (Electronics and comm engg)during bachelor studies i gained some knowledge about Java \u0026 other programming language like C,C++ which drives my interest made me doing current Master degree in the field of Mobile computing(MS in mobile computing) there by acquiring java,html,PHP and other programming skills."
      ],
      "line": 39,
      "id": "show-profile-card-details;show-member-details;;4"
    },
    {
      "cells": [
        "Tiago Monteiro",
        "Hi there! I am currently studying to finish my Master in Mobile Computing at Instituto Politécnico de Leiria, where I also teach PHP to students from another course. In my free time, I like to play football and watch movies."
      ],
      "line": 40,
      "id": "show-profile-card-details;show-member-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the \"Carlos Ferreira\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be able to see the short bio \"Hi! My name is Carlos Ferreira. I\u0027m enrolled in the master\u0027s degree in mobile computing of School of Technology and Management of Polytechnic Institute of Leiria and I\u0027m working on a enterprise near of the School.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 194949420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 102511601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi! My name is Carlos Ferreira. I\u0027m enrolled in the master\u0027s degree in mobile computing of School of Technology and Management of Polytechnic Institute of Leiria and I\u0027m working on a enterprise near of the School.",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheShortBio(String)"
});
formatter.result({
  "duration": 34774682,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the \"João Silva\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be able to see the short bio \"Hello! Right now, i\u0027m on the first year of a master degree in Mobile Computing at Polytechnic Institute of Leiria. I also took my bachelor on this institute. If i could i would travel all around the world!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 218197431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Silva",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 118933830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello! Right now, i\u0027m on the first year of a master degree in Mobile Computing at Polytechnic Institute of Leiria. I also took my bachelor on this institute. If i could i would travel all around the world!",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheShortBio(String)"
});
formatter.result({
  "duration": 41465352,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the \"Nivedhita Gowthaman\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be able to see the short bio \"Fitsrly,I have done my Bachelor\u0027s in electronics engineer and Master of engineering in VLSI design (Electronics and comm engg)during bachelor studies i gained some knowledge about Java \u0026 other programming language like C,C++ which drives my interest made me doing current Master degree in the field of Mobile computing(MS in mobile computing) there by acquiring java,html,PHP and other programming skills.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 213645872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhita Gowthaman",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 107442715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fitsrly,I have done my Bachelor\u0027s in electronics engineer and Master of engineering in VLSI design (Electronics and comm engg)during bachelor studies i gained some knowledge about Java \u0026 other programming language like C,C++ which drives my interest made me doing current Master degree in the field of Mobile computing(MS in mobile computing) there by acquiring java,html,PHP and other programming skills.",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheShortBio(String)"
});
formatter.result({
  "duration": 34845348,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the \"Tiago Monteiro\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be able to see the short bio \"Hi there! I am currently studying to finish my Master in Mobile Computing at Instituto Politécnico de Leiria, where I also teach PHP to students from another course. In my free time, I like to play football and watch movies.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 222558766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Monteiro",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 119352053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi there! I am currently studying to finish my Master in Mobile Computing at Instituto Politécnico de Leiria, where I also teach PHP to students from another course. In my free time, I like to play football and watch movies.",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheShortBio(String)"
});
formatter.result({
  "duration": 34969349,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the \"\u003cmember_name\u003e\" is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should be able to see the email \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "show-profile-card-details;show-member-details;",
  "rows": [
    {
      "cells": [
        "member_name",
        "email"
      ],
      "line": 48,
      "id": "show-profile-card-details;show-member-details;;1"
    },
    {
      "cells": [
        "Carlos Ferreira",
        "2162070@my.ipleiria.pt"
      ],
      "line": 49,
      "id": "show-profile-card-details;show-member-details;;2"
    },
    {
      "cells": [
        "João Silva",
        "2162436@my.ipleiria.pt"
      ],
      "line": 50,
      "id": "show-profile-card-details;show-member-details;;3"
    },
    {
      "cells": [
        "Nivedhita Gowthaman",
        "gm.niveditha@gmail.com"
      ],
      "line": 51,
      "id": "show-profile-card-details;show-member-details;;4"
    },
    {
      "cells": [
        "Tiago Monteiro",
        "2162061@my.ipleiria.pt"
      ],
      "line": 52,
      "id": "show-profile-card-details;show-member-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the \"Carlos Ferreira\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should be able to see the email \"2162070@my.ipleiria.pt\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 224867211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 122239165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2162070@my.ipleiria.pt",
      "offset": 35
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEmail(String)"
});
formatter.result({
  "duration": 33692015,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the \"João Silva\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should be able to see the email \"2162436@my.ipleiria.pt\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 203728091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Silva",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 143310731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2162436@my.ipleiria.pt",
      "offset": 35
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEmail(String)"
});
formatter.result({
  "duration": 35120460,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the \"Nivedhita Gowthaman\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should be able to see the email \"gm.niveditha@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 485501549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhita Gowthaman",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 108420493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gm.niveditha@gmail.com",
      "offset": 35
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEmail(String)"
});
formatter.result({
  "duration": 44170686,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the \"Tiago Monteiro\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should be able to see the email \"2162061@my.ipleiria.pt\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 224737878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Monteiro",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 108419604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2162061@my.ipleiria.pt",
      "offset": 35
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEmail(String)"
});
formatter.result({
  "duration": 33469348,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "the \"\u003cmember_name\u003e\" is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the education \"\u003ceducation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "show-profile-card-details;show-member-details;",
  "rows": [
    {
      "cells": [
        "member_name",
        "education"
      ],
      "line": 60,
      "id": "show-profile-card-details;show-member-details;;1"
    },
    {
      "cells": [
        "Carlos Ferreira",
        "Bachelor in Computer Science"
      ],
      "line": 61,
      "id": "show-profile-card-details;show-member-details;;2"
    },
    {
      "cells": [
        "João Silva",
        "Bachelor in Healthcare Informatics"
      ],
      "line": 62,
      "id": "show-profile-card-details;show-member-details;;3"
    },
    {
      "cells": [
        "Nivedhita Gowthaman",
        "Bachelor of Electronics \u0026 Communication Engineering(2008-2012) Master of Engineering in VLSI design (2012-2014)"
      ],
      "line": 63,
      "id": "show-profile-card-details;show-member-details;;4"
    },
    {
      "cells": [
        "Tiago Monteiro",
        "Bachelor in Computer Science (2012 - 2016)"
      ],
      "line": 64,
      "id": "show-profile-card-details;show-member-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 61,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "the \"Carlos Ferreira\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the education \"Bachelor in Computer Science\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 188756528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 111780938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bachelor in Computer Science",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEducation(String)"
});
formatter.result({
  "duration": 31294681,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "the \"João Silva\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the education \"Bachelor in Healthcare Informatics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 211814316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Silva",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 102028045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bachelor in Healthcare Informatics",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEducation(String)"
});
formatter.result({
  "duration": 35656460,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "the \"Nivedhita Gowthaman\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the education \"Bachelor of Electronics \u0026 Communication Engineering(2008-2012) Master of Engineering in VLSI design (2012-2014)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 229843214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhita Gowthaman",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 109492493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bachelor of Electronics \u0026 Communication Engineering(2008-2012) Master of Engineering in VLSI design (2012-2014)",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEducation(String)"
});
formatter.result({
  "duration": 37608461,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "the \"Tiago Monteiro\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see the education \"Bachelor in Computer Science (2012 - 2016)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 256626780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Monteiro",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 157005403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bachelor in Computer Science (2012 - 2016)",
      "offset": 39
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheEducation(String)"
});
formatter.result({
  "duration": 39382685,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 66,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "the \"\u003cmember_name\u003e\" is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the projects \"\u003cprojects\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "show-profile-card-details;show-member-details;",
  "rows": [
    {
      "cells": [
        "member_name",
        "projects"
      ],
      "line": 72,
      "id": "show-profile-card-details;show-member-details;;1"
    },
    {
      "cells": [
        "Carlos Ferreira",
        "I\u0027m currently working in a business group of ten companies. Some of the companies are represented in geographically distant locations. This implies that the business group is connected through a WAN network. My professional projects are therefore related to all the computer aspects of the various companies. Thus my professional projects are related to the management of the computer network and to all the infomatic applications used in the Group."
      ],
      "line": 73,
      "id": "show-profile-card-details;show-member-details;;2"
    },
    {
      "cells": [
        "João Silva",
        "While taking my bachelor, i worked in a lot projects because the subjects required so and due to working on a lot of projects I had contact with some programming languages like C#, Java, Android, HTML, CSS and PHP. I also had contact with a very well known project that consisted making a wheelchair electric and cheap. My take on this project was optimizing the existing source code while converting it to Java."
      ],
      "line": 74,
      "id": "show-profile-card-details;show-member-details;;3"
    },
    {
      "cells": [
        "Nivedhita Gowthaman",
        "I have done projects on the field of embedded system named \"Smart health-care system for elderly using Zig-Bee\" and Mini project on sensor system as\"Road- obstacle detection stick for Blind\" and individual project in Master\u0027s(VLSI design) based on \"A Power Efficient High Speed Parity CAM Checker Design\"(Search Engine)that mainly descibes the power consumption of Search engine."
      ],
      "line": 75,
      "id": "show-profile-card-details;show-member-details;;4"
    },
    {
      "cells": [
        "Tiago Monteiro",
        "While I was doing the Bachelor in Computer Science, most of the subjects required a project to be developed. Thereford, I had the opportunity to work in several programming languages like C, C#, Java, HTML, CSS, JavaScript and PHP. Up to date, the most relevant project I worked it is now under production and its objective is to help members of the coordination course to make schedules for students to attend classes while maintaining shifts balanced"
      ],
      "line": 76,
      "id": "show-profile-card-details;show-member-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 73,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "the \"Carlos Ferreira\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the projects \"I\u0027m currently working in a business group of ten companies. Some of the companies are represented in geographically distant locations. This implies that the business group is connected through a WAN network. My professional projects are therefore related to all the computer aspects of the various companies. Thus my professional projects are related to the management of the computer network and to all the infomatic applications used in the Group.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 234268993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Ferreira",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 114259606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I\u0027m currently working in a business group of ten companies. Some of the companies are represented in geographically distant locations. This implies that the business group is connected through a WAN network. My professional projects are therefore related to all the computer aspects of the various companies. Thus my professional projects are related to the management of the computer network and to all the infomatic applications used in the Group.",
      "offset": 38
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheProjects(String)"
});
formatter.result({
  "duration": 42663574,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "the \"João Silva\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the projects \"While taking my bachelor, i worked in a lot projects because the subjects required so and due to working on a lot of projects I had contact with some programming languages like C#, Java, Android, HTML, CSS and PHP. I also had contact with a very well known project that consisted making a wheelchair electric and cheap. My take on this project was optimizing the existing source code while converting it to Java.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 252508112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "João Silva",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 139220507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "While taking my bachelor, i worked in a lot projects because the subjects required so and due to working on a lot of projects I had contact with some programming languages like C#, Java, Android, HTML, CSS and PHP. I also had contact with a very well known project that consisted making a wheelchair electric and cheap. My take on this project was optimizing the existing source code while converting it to Java.",
      "offset": 38
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheProjects(String)"
});
formatter.result({
  "duration": 53689357,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "the \"Nivedhita Gowthaman\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the projects \"I have done projects on the field of embedded system named \"Smart health-care system for elderly using Zig-Bee\" and Mini project on sensor system as\"Road- obstacle detection stick for Blind\" and individual project in Master\u0027s(VLSI design) based on \"A Power Efficient High Speed Parity CAM Checker Design\"(Search Engine)that mainly descibes the power consumption of Search engine.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 228734769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivedhita Gowthaman",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 291826352,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 76,
  "name": "Show Member Details",
  "description": "",
  "id": "show-profile-card-details;show-member-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "the \"Tiago Monteiro\" is clicked",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should be able to see the projects \"While I was doing the Bachelor in Computer Science, most of the subjects required a project to be developed. Thereford, I had the opportunity to work in several programming languages like C, C#, Java, HTML, CSS, JavaScript and PHP. Up to date, the most relevant project I worked it is now under production and its objective is to help members of the coordination course to make schedules for students to attend classes while maintaining shifts balanced\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 366842830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tiago Monteiro",
      "offset": 5
    }
  ],
  "location": "ShowProfileCardsStepDefs.theIsClicked(String)"
});
formatter.result({
  "duration": 153341401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "While I was doing the Bachelor in Computer Science, most of the subjects required a project to be developed. Thereford, I had the opportunity to work in several programming languages like C, C#, Java, HTML, CSS, JavaScript and PHP. Up to date, the most relevant project I worked it is now under production and its objective is to help members of the coordination course to make schedules for students to attend classes while maintaining shifts balanced",
      "offset": 38
    }
  ],
  "location": "ShowProfileCardsStepDefs.iShouldBeAbleToSeeTheProjects(String)"
});
formatter.result({
  "duration": 44949353,
  "status": "passed"
});
formatter.uri("VerifySocialNetworkButton.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Social Network Button",
  "description": "As a user\r\nI want to verify if social network button works\r\nso i am redirected to the social network page",
  "id": "verify-social-network-button",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Social Network Button",
  "description": "",
  "id": "verify-social-network-button;verify-social-network-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click social network button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i am redirected to the social network page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShowProfileCardsStepDefs.iMInTheMainPage()"
});
formatter.result({
  "duration": 232132547,
  "status": "passed"
});
formatter.match({
  "location": "VerifySocialNetworkStepDefs.iClickSocialNetworkButton()"
});
formatter.result({
  "duration": 3788460350,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: /html/body/div/div[2]/div[2]/a\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027TIAGO\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\Tiago\\AppData\\Local\\Temp\\rust_mozprofile.5rxvLs3QmUV7, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d53.0.3, platformVersion\u003d10.0, moz:processID\u003d17808, browserName\u003dfirefox, platformName\u003dwindows_nt}]\nSession ID: eab316ad-595f-4145-ab21-5b2184b4d3e2\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div[2]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:99)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:43)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:604)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:476)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat VerifySocialNetworkStepDefs.iClickSocialNetworkButton(VerifySocialNetworkStepDefs.java:31)\r\n\tat ✽.When I click social network button(VerifySocialNetworkButton.feature:8)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
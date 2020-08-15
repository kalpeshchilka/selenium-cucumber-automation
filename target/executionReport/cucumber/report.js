$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuyProduct.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: chilkakalpesh@gmail.com"
    }
  ],
  "line": 2,
  "name": "Tests and verifies End to End Checkout flow",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters Credit Card payment details as \u003cCardNumber\u003e and \u003cExpriyDate\u003e and \u003cCVVNumber\u003e and \u003cBanksOTP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;",
  "rows": [
    {
      "cells": [
        "CardNumber",
        "ExpriyDate",
        "CVVNumber",
        "BanksOTP"
      ],
      "line": 11,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;1"
    },
    {
      "cells": [
        "4811 1111 1111 1114",
        "12/24",
        "123",
        "112233"
      ],
      "line": 12,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enters Credit Card payment details as 4811 1111 1111 1114 and 12/24 and 123 and 112233",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyProductStepDefinations.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5211267418,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
  "duration": 8466333184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 38
    },
    {
      "val": "12/24",
      "offset": 62
    },
    {
      "val": "123",
      "offset": 72
    },
    {
      "val": "112233",
      "offset": 80
    }
  ],
  "location": "BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 13075431630,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_successfully_completed()"
});
formatter.result({
  "duration": 43514178,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify user is unable to purchase Pillow using incorrect Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enters Credit Card payment details as \u003cCardNumber\u003e and \u003cExpriyDate\u003e and \u003cCVVNumber\u003e and \u003cBanksOTP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify payment is Failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;",
  "rows": [
    {
      "cells": [
        "CardNumber",
        "ExpriyDate",
        "CVVNumber",
        "BanksOTP"
      ],
      "line": 22,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;;1"
    },
    {
      "cells": [
        "4911 1111 1111 1113",
        "02/21",
        "123",
        "112233"
      ],
      "line": 23,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user is unable to purchase Pillow using incorrect Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enters Credit Card payment details as 4911 1111 1111 1113 and 02/21 and 123 and 112233",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify payment is Failed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyProductStepDefinations.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5008434286,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
  "duration": 8412269828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911 1111 1111 1113",
      "offset": 38
    },
    {
      "val": "02/21",
      "offset": 62
    },
    {
      "val": "123",
      "offset": 72
    },
    {
      "val": "112233",
      "offset": 80
    }
  ],
  "location": "BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 12814797975,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_failed()"
});
formatter.result({
  "duration": 53811817,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuyProduct.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: chilkakalpesh@gmail.com"
    }
  ],
  "line": 2,
  "name": "Test and verify End to End Checkout flow",
  "description": "",
  "id": "test-and-verify-end-to-end-checkout-flow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enters Credit Card payment details with CardNumber as \u003cCardNumber\u003e , ExpriyDate as \u003cExpriyDate\u003e , CVVNumber as \u003cCVVNumber\u003e and BanksOTP as \u003cBanksOTP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;",
  "rows": [
    {
      "cells": [
        "CardNumber",
        "ExpriyDate",
        "CVVNumber",
        "BanksOTP"
      ],
      "line": 12,
      "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;1"
    },
    {
      "cells": [
        "4811 1111 1111 1114",
        "12/24",
        "123",
        "112233"
      ],
      "line": 13,
      "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enters Credit Card payment details with CardNumber as 4811 1111 1111 1114 , ExpriyDate as 12/24 , CVVNumber as 123 and BanksOTP as 112233",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyProductStepDefinations.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5130253524,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
  "duration": 9028704527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 54
    },
    {
      "val": "12/24",
      "offset": 90
    },
    {
      "val": "123",
      "offset": 111
    },
    {
      "val": "112233",
      "offset": 131
    }
  ],
  "location": "BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 13397759491,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_successfully_completed()"
});
formatter.result({
  "duration": 34080100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify user is unable to purchase Pillow using incorrect Credit Card payment details",
  "description": "",
  "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enters Credit Card payment details with CardNumber as \u003cCardNumber\u003e , ExpriyDate as \u003cExpriyDate\u003e , CVVNumber as \u003cCVVNumber\u003e and BanksOTP as \u003cBanksOTP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify payment is Failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;",
  "rows": [
    {
      "cells": [
        "CardNumber",
        "ExpriyDate",
        "CVVNumber",
        "BanksOTP"
      ],
      "line": 24,
      "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;;1"
    },
    {
      "cells": [
        "4911 1111 1111 1113",
        "02/21",
        "123",
        "112233"
      ],
      "line": 25,
      "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user is unable to purchase Pillow using incorrect Credit Card payment details",
  "description": "",
  "id": "test-and-verify-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User proceeds for Checkout with Credit Card Payment",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enters Credit Card payment details with CardNumber as 4911 1111 1111 1113 , ExpriyDate as 02/21 , CVVNumber as 123 and BanksOTP as 112233",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify payment is Failed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyProductStepDefinations.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5007461366,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
  "duration": 8612145408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911 1111 1111 1113",
      "offset": 54
    },
    {
      "val": "02/21",
      "offset": 90
    },
    {
      "val": "123",
      "offset": 111
    },
    {
      "val": "112233",
      "offset": 131
    }
  ],
  "location": "BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 12287968551,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_failed()"
});
formatter.result({
  "duration": 36339917,
  "status": "passed"
});
});
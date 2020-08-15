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
<<<<<<< HEAD
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
=======
  "keyword": "Scenario Outline"
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "line": 8,
  "name": "Enters Credit Card payment details with CardNumber as \u003cCardNumber\u003e , ExpriyDate as \u003cExpriyDate\u003e , CVVNumber as \u003cCVVNumber\u003e and BanksOTP as \u003cBanksOTP\u003e",
=======
  "line": 7,
  "name": "Enters Credit Card payment details as \u003cCardNumber\u003e and \u003cExpriyDate\u003e and \u003cCVVNumber\u003e and \u003cBanksOTP\u003e",
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
=======
  "keyword": "Scenario Outline"
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "line": 8,
  "name": "Enters Credit Card payment details with CardNumber as 4811 1111 1111 1114 , ExpriyDate as 12/24 , CVVNumber as 123 and BanksOTP as 112233",
=======
  "line": 7,
  "name": "Enters Credit Card payment details as 4811 1111 1111 1114 and 12/24 and 123 and 112233",
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "duration": 5115821588,
=======
  "duration": 5211267418,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 8894965711,
=======
  "duration": 8466333184,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "duration": 12363963668,
=======
  "duration": 13075431630,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_successfully_completed()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 29157395,
=======
  "duration": 43514178,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify user is unable to purchase Pillow using incorrect Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-unable-to-purchase-pillow-using-incorrect-credit-card-payment-details",
  "type": "scenario_outline",
<<<<<<< HEAD
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
=======
  "keyword": "Scenario Outline"
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "line": 20,
  "name": "Enters Credit Card payment details with CardNumber as \u003cCardNumber\u003e , ExpriyDate as \u003cExpriyDate\u003e , CVVNumber as \u003cCVVNumber\u003e and BanksOTP as \u003cBanksOTP\u003e",
=======
  "line": 18,
  "name": "Enters Credit Card payment details as \u003cCardNumber\u003e and \u003cExpriyDate\u003e and \u003cCVVNumber\u003e and \u003cBanksOTP\u003e",
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
=======
  "keyword": "Scenario Outline"
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "line": 20,
  "name": "Enters Credit Card payment details with CardNumber as 4911 1111 1111 1113 , ExpriyDate as 02/21 , CVVNumber as 123 and BanksOTP as 112233",
=======
  "line": 18,
  "name": "Enters Credit Card payment details as 4911 1111 1111 1113 and 02/21 and 123 and 112233",
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "duration": 5008233668,
=======
  "duration": 5008434286,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 8611665553,
=======
  "duration": 8412269828,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
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
<<<<<<< HEAD
  "duration": 12490992497,
=======
  "duration": 12814797975,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_failed()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 31512804,
=======
  "duration": 53811817,
>>>>>>> 5585daa5a0ccdb6e341beb701c7d20eb1e341890
  "status": "passed"
});
});
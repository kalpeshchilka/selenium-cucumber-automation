$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuyProduct.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: chilkakalpesh@gmail.com"
    }
  ],
  "line": 3,
  "name": "Tests and verifies End to End Checkout flow",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User proceeds for Checkout",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enters valid Credit Card payment details as \u003cCardNumber\u003e and \u003cExpriyDate\u003e and \u003cCVVNumber\u003e and \u003cBanksOTP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
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
      "line": 14,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;1"
    },
    {
      "cells": [
        "4811 1111 1111 1114",
        "12/24",
        "123",
        "112233"
      ],
      "line": 15,
      "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Verify user is successfully able to purchase Pillow using correct Credit Card payment details",
  "description": "",
  "id": "tests-and-verifies-end-to-end-checkout-flow;verify-user-is-successfully-able-to-purchase-pillow-using-correct-credit-card-payment-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User proceeds for Checkout",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Enters valid Credit Card payment details as 4811 1111 1111 1114 and 12/24 and 123 and 112233",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify payment is successfully completed",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyProductStepDefinations.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 5168219111,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductStepDefinations.user_proceeds_for_checkout()"
});
formatter.result({
  "duration": 20993831294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 44
    },
    {
      "val": "12/24",
      "offset": 68
    },
    {
      "val": "123",
      "offset": 78
    },
    {
      "val": "112233",
      "offset": 86
    }
  ],
  "location": "BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 9180281872,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class org.openqa.selenium.WebDriverException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat com.dkatalislabs.pages.BuyProductPage.enterBanksOTP(BuyProductPage.java:55)\n\tat com.dkatalislabs.stepDefinations.BuyProductStepDefinations.enters_valid_credit_card_payment_details_as_and_and_and(BuyProductStepDefinations.java:40)\n\tat ✽.And Enters valid Credit Card payment details as 4811 1111 1111 1114 and 12/24 and 123 and 112233(features/BuyProduct.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "BuyProductStepDefinations.verify_payment_is_successfully_completed()"
});
formatter.result({
  "status": "skipped"
});
});
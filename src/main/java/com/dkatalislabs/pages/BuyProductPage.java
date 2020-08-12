package com.dkatalislabs.pages;

import com.dkatalislabs.utilities.Utility.ELEMENT_LOCATE_BY;
import com.dkatalislabs.utilities.ActionMethods;

public class BuyProductPage extends ActionMethods {

	public static String checkoutButton = "//div[@class=\"cart-checkout\" and text()='CHECKOUT']";
	public static String continueButton = "//a[@href=\"#/select-payment\"]";
	public static String creditCardPayment = "//a[@href=\"#/credit-card\"]";

	public void clickCheckoutButton() {
		waitForElementPresent(checkoutButton, ELEMENT_LOCATE_BY.XPATH, 200);
		clickElement(checkoutButton, ELEMENT_LOCATE_BY.XPATH);
		waitForCertainPeriod(100);
	}

	public void clickContinueButton() {
		switchToFrameById("snap-midtrans");
		waitForElementPresent(continueButton, ELEMENT_LOCATE_BY.XPATH, 200);
		clickElement(continueButton, ELEMENT_LOCATE_BY.XPATH);
		waitForCertainPeriod(100);
	}

	public void selectCreditCardPaymentType() {
		waitForElementPresent(creditCardPayment, ELEMENT_LOCATE_BY.XPATH, 200);
		clickElement(creditCardPayment, ELEMENT_LOCATE_BY.XPATH);
		waitForCertainPeriod(100);
	}

}

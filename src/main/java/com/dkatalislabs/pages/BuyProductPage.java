package com.dkatalislabs.pages;

import org.openqa.selenium.By;

import com.dkatalislabs.utilities.ActionMethods;
import com.dkatalislabs.utilities.Utility.ELEMENT_LOCATE_BY;

public class BuyProductPage extends ActionMethods {

	public static String checkoutButton = "//div[@class=\"cart-checkout\" and text()='CHECKOUT']";
	public static String continueButton = "//a[@href=\"#/select-payment\"]";
	public static String creditCardPayment = "//a[@href=\"#/credit-card\"]";
	public static String cardNumberField = "//input[@name=\"cardnumber\"]";
	public static String cvvField = "//input[@inputmode=\"numeric\"]";
	public static String expiryDateField = "//input[@placeholder=\"MM / YY\"]";
	public static String payNowButton = "//span[text()='Pay Now']";
	public static String bankOTPField = "//input[@name='PaRes']";
	public static String okButton = "//button[@type=\"submit\" and text()='OK']";
	public static String transactionMsg = "//div[@class=\"text-success text-bold\"]";

	public void clickCheckoutButton() {
		waitForElementPresent(checkoutButton, ELEMENT_LOCATE_BY.XPATH, 200);
		clickElement(checkoutButton, ELEMENT_LOCATE_BY.XPATH);
	}

	public void clickContinueButton() {
		switchToFrameById("snap-midtrans");
		clickElement(continueButton, ELEMENT_LOCATE_BY.XPATH);
	}

	public void selectCreditCardPaymentType() {
		waitForElementPresent(creditCardPayment, ELEMENT_LOCATE_BY.XPATH, 200);
		clickElement(creditCardPayment, ELEMENT_LOCATE_BY.XPATH);
	}

	public void enterCreditCardDetails(String cardnumber, String expriydate, String cvvnumber) {
		inputValue(cardNumberField, cardnumber, ELEMENT_LOCATE_BY.XPATH);
		inputValue(cvvField, cvvnumber, ELEMENT_LOCATE_BY.XPATH);
		inputValue(expiryDateField, expriydate, ELEMENT_LOCATE_BY.XPATH);
	}

	public void clickPayNowButton() {
		waitForClickabilityOfElement(payNowButton, 20);
		waitForElementPresent(payNowButton, ELEMENT_LOCATE_BY.XPATH, 200);
		clickElementUsingJS(payNowButton, ELEMENT_LOCATE_BY.XPATH);
	}

	public void enterBanksOTP(String otpValue) {
		switchToFrameByIndex(0);
		waitForElementPresent(bankOTPField, ELEMENT_LOCATE_BY.XPATH, 1000);
		clickElement(bankOTPField, ELEMENT_LOCATE_BY.XPATH);
		inputValue(bankOTPField, otpValue, ELEMENT_LOCATE_BY.XPATH);
		clickElement(okButton, ELEMENT_LOCATE_BY.XPATH);
		switchFrameToDefaultContent();
	}

	public void verifyTransactionSuccessfullMsg() {
		switchToFrameByIndex(0);
		String transactionMessage = driver.findElement(By.xpath(transactionMsg)).getText();
		System.out.println("Text written on the login button is- " + transactionMessage);

		if (transactionMessage.equals("Transaction successful")) {
			System.out.println("Transaction successfull!");
		} else
			System.out.println("Transaction Failed!");
	}

	public void verifyTransactionFailedMsg() {

	}

}

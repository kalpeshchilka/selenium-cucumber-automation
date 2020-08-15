package com.dkatalislabs.pages;

import org.openqa.selenium.By;
import org.testng.Assert;

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
	public static String transactionSuccessMsg = "//div[@class=\"text-success text-bold\"]";
	public static String transactionFailMsg = "//div[@class=\"text-failed text-bold\"]/span";
	public static String transactionFailedReason = "//div[@class=\"text-failed\"]/span";

	public void clickCheckoutButton() {
		waitForElementPresent(checkoutButton, ELEMENT_LOCATE_BY.XPATH, 2000);
		clickElement(checkoutButton, ELEMENT_LOCATE_BY.XPATH);
	}

	public void clickContinueButton() {
		// Switching the frame using id is very slow as compare to switching frame by
		// index
//		switchToFrameById("snap-midtrans");
		switchToFrameByIndex(0);
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
		waitForElementPresent(bankOTPField, ELEMENT_LOCATE_BY.XPATH, 10000);
		clickElement(bankOTPField, ELEMENT_LOCATE_BY.XPATH);
		inputValue(bankOTPField, otpValue, ELEMENT_LOCATE_BY.XPATH);
		clickElement(okButton, ELEMENT_LOCATE_BY.XPATH);
		switchFrameToDefaultContent();
	}

	public void verifyTransactionSuccessfullMsg() {
		switchToFrameByIndex(0);
		String transactionMessage = driver.findElement(By.xpath(transactionSuccessMsg)).getText();
		System.out.println("Transaction message: " + transactionMessage);
		Assert.assertEquals(transactionMessage, "Transaction successful");
		switchFrameToDefaultContent();
	}

	public void verifyTransactionFailedMsg() {
		switchToFrameByIndex(0);
		String transactionMessage = driver.findElement(By.xpath(transactionFailMsg)).getText();
		System.out.println("Transaction message: " + transactionMessage);
		Assert.assertEquals(transactionMessage, "Transaction failed");

		String transactionReasonMessage = driver.findElement(By.xpath(transactionFailedReason)).getText();
		System.out.println("Transaction Failed Reason message: " + transactionReasonMessage);
		Assert.assertEquals(transactionReasonMessage, "Your card got declined by the bank");
		switchFrameToDefaultContent();
	}

}

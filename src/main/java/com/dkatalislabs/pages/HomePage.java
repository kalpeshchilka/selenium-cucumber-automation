package com.dkatalislabs.pages;

import org.testng.Assert;

import com.dkatalislabs.utilities.ActionMethods;
import com.dkatalislabs.utilities.Utility.ELEMENT_LOCATE_BY;

/**
 * 
 * This class consist of all the locators need to perform actions on Home Page
 * 
 * @author kalpesh
 *
 */
public class HomePage extends ActionMethods {
	public static String buyNowButton = "//a[@class=\"btn buy\" and text()='BUY NOW']";;

	public void clickBuyNowButton() {
		waitForElementPresent(buyNowButton, ELEMENT_LOCATE_BY.XPATH, 2000);
		clickElement(buyNowButton, ELEMENT_LOCATE_BY.XPATH);
	}

	public void verifyHomePage() {
		String currentUrl = getCurrentUrl();
		Assert.assertTrue(currentUrl.equals("https://demo.midtrans.com/"));
	}
}

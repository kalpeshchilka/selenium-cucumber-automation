package com.dkatalislabs.stepDefinations;

import com.dkatalislabs.pages.BuyProductPage;
import com.dkatalislabs.pages.HomePage;
import com.dkatalislabs.testbase.BaseTest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuyProductStepDefinations extends BaseTest {

	BuyProductPage buyProductPage;
	HomePage homePage;

	public BuyProductStepDefinations() {
		buyProductPage = new BuyProductPage();
		homePage = new HomePage();
	}

	@Given("^User is on the homepage$")
	public void user_is_on_the_homepage() throws Throwable {
		homePage.verifyHomePage();
	}

	@When("^User proceeds for Checkout with Credit Card Payment$")
	public void user_proceeds_for_checkout() throws Throwable {
		homePage.clickBuyNowButton();
		buyProductPage.clickCheckoutButton();
		buyProductPage.clickContinueButton();
		buyProductPage.selectCreditCardPaymentType();
	}

    @And("^Enters Credit Card payment details with CardNumber as (.+) , ExpriyDate as (.+) , CVVNumber as (.+) and BanksOTP as (.+)$")
	public void enters_valid_credit_card_payment_details_as_and_and_and(String cardnumber, String expriydate,
			String cvvnumber, String banksotp) throws Throwable {
		buyProductPage.enterCreditCardDetails(cardnumber, expriydate, cvvnumber);
		buyProductPage.clickPayNowButton();
		buyProductPage.enterBanksOTP(banksotp);
	}

	@Then("^Verify payment is successfully completed$")
	public void verify_payment_is_successfully_completed() throws Throwable {
		buyProductPage.verifyTransactionSuccessfullMsg();
	}

	@Then("^Verify payment is Failed$")
	public void verify_payment_is_failed() throws Throwable {
		buyProductPage.verifyTransactionFailedMsg();
	}

}

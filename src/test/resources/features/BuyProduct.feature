#Author: chilkakalpesh@gmail.com
Feature: Tests and verifies End to End Checkout flow

  @SmokeTest
  Scenario Outline: Verify user is successfully able to purchase Pillow using correct Credit Card payment details
  	Given User is on the homepage
  	When User proceeds for Checkout with Credit Card Payment
  	And Enters Credit Card payment details with CardNumber as <CardNumber> , ExpriyDate as <ExpriyDate> , CVVNumber as <CVVNumber> and BanksOTP as <BanksOTP>
  	Then Verify payment is successfully completed

    Examples: 
      | CardNumber  				| ExpriyDate | CVVNumber  | BanksOTP  |
      | 4811 1111 1111 1114 |     12/24  | 123 				|	112233		|
      
      
  @SmokeTest
  Scenario Outline: Verify user is unable to purchase Pillow using incorrect Credit Card payment details
  	Given User is on the homepage
  	When User proceeds for Checkout with Credit Card Payment
  	And Enters Credit Card payment details with CardNumber as <CardNumber> , ExpriyDate as <ExpriyDate> , CVVNumber as <CVVNumber> and BanksOTP as <BanksOTP>
  	Then Verify payment is Failed
  
    Examples: 
      | CardNumber  				| ExpriyDate | CVVNumber  | BanksOTP  |
      | 4911 1111 1111 1113 |     02/21  | 123 				|	112233		|

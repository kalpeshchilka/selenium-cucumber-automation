#Author: chilkakalpesh@gmail.com
@tag
Feature: Tests and verifies End to End Checkout flow

  @tag2
  Scenario Outline: Verify user is successfully able to purchase Pillow using correct Credit Card payment details
  	Given User is on the homepage
  	When User proceeds for Checkout
  	And Enters valid Credit Card payment details as <CardNumber> and <ExpriyDate> and <CVVNumber> and <BanksOTP>
  	Then Verify payment is successfully completed
  

    Examples: 
      | CardNumber  				| ExpriyDate | CVVNumber  | BanksOTP  |
      | 4811 1111 1111 1114 |     12/24  | 123 				|	112233		|

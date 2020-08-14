package com.dkatalislabs.utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.dkatalislabs.testbase.BaseTest;
import com.dkatalislabs.utilities.Utility.ELEMENT_LOCATE_BY;

public class ActionMethods extends BaseTest {

	public void waitForCertainPeriod(long milliSec) {
		try {
			Thread.sleep(milliSec);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public WebElement findElement(String locator, ELEMENT_LOCATE_BY ele) {
		WebElement element;
		switch (ele) {
		case XPATH:
			element = driver.findElement(By.xpath(locator));
			highlight(element);
			return element;

		case ID:
			element = driver.findElement(By.id(locator));
			highlight(element);
			return element;

		case NAME:
			element = driver.findElement(By.name(locator));
			highlight(element);
			return element;

		case CLASSNAME:
			element = driver.findElement(By.className(locator));
			highlight(element);
			return element;

		default:
			return null;
		}
	}

	public void clickElement(String locator, ELEMENT_LOCATE_BY ele) {
		findElement(locator, ele).click();
		waitForCertainPeriod(1000);
	}

	public void waitForElementPresent(String locator, ELEMENT_LOCATE_BY ele, int waitTime) {
		WebDriverWait wait = new WebDriverWait(driver, waitTime);
		switch (ele) {
		case XPATH:
			wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath(locator)));
			break;

		case ID:
			wait.until(ExpectedConditions.presenceOfElementLocated(By.id(locator)));
			break;

		case NAME:
			wait.until(ExpectedConditions.presenceOfElementLocated(By.name(locator)));
			break;

		case CLASSNAME:
			wait.until(ExpectedConditions.presenceOfElementLocated(By.className(locator)));
			break;

		}

	}

	public void waitForPageLoad() {
		(new WebDriverWait(driver, 5)).until(new ExpectedCondition<Boolean>() {
			public Boolean apply(WebDriver driver) {
				JavascriptExecutor js = (JavascriptExecutor) driver;
				String readyState = js.executeScript("return document.readyState").toString();
				return (Boolean) readyState.equals("complete");
			}
		});
	}

	public WebElement waitForVisibilityOfElement(String locator, int timeOutPeriod) {
		WebDriverWait webDriverWait = new WebDriverWait(driver, timeOutPeriod);
		return webDriverWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locator)));
	}

	public WebElement waitForClickabilityOfElement(String locator, int timeOutPeriod) {
		WebDriverWait webDriverWait = new WebDriverWait(driver, timeOutPeriod);
		return webDriverWait.until(ExpectedConditions.elementToBeClickable(By.xpath(locator)));
	}

	public void inputValue(String locator, String value, ELEMENT_LOCATE_BY ele) {
		findElement(locator, ele).clear();
		findElement(locator, ele).sendKeys(value);
		waitForCertainPeriod(1000);
	}

	public boolean verifyElementPresent(String locator, ELEMENT_LOCATE_BY ele) {
		waitForElementPresent(locator, ele, 2000);
		WebElement element = findElement(locator, ele);
		if (element.isDisplayed()) {
			Assert.assertTrue(true, "Element is displayed. !!!!!");
			return true;
		} else {
			Assert.fail("Element is not present.!!!!!");
			return false;
		}
	}

	public void launchUrl(String url) {
		driver.get(url);
		waitForPageLoad();
	}

	public void switchToFrameById(String frameId) {
		driver.switchTo().frame(frameId);
	}

	public void switchToFrameByIndex(int index) {
		driver.switchTo().frame(index);
	}

	public static void switchFrameToDefaultContent() {
		driver.switchTo().defaultContent();
	}

	public String getCurrentUrl() {
		waitForCertainPeriod(5000);
		String url = driver.getCurrentUrl();
		return url;
	}

	public void highlight(WebElement element) {
		try {
			if (true) {
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element,
						"border: 2px solid red;");

			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void selectByValueFromDropDown(String locator, String valueTobeSelected, ELEMENT_LOCATE_BY ele) {
		WebElement element = null;
		element = findElement(locator, ele);
		Select webCheckBox = new Select(element);
		webCheckBox.selectByValue(valueTobeSelected);
	}

	public void selectByPartOfVisibleText(String locator, String valueTobeSelected, ELEMENT_LOCATE_BY ele) {
		WebElement element = null;
		element = findElement(locator, ele);
		Select dropDown = new Select(element);
		int index = 0;
		for (WebElement option : dropDown.getOptions()) {
			if (option.getText().toLowerCase().contains(valueTobeSelected.toLowerCase()))
				break;
			index++;
		}
		dropDown.selectByIndex(index);
	}

	public void scrollToElement(String locator, ELEMENT_LOCATE_BY element) {
		WebElement webElement = findElement(locator, element);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", webElement);
	}

	public void clickElementUsingJS(String locator, ELEMENT_LOCATE_BY element) {
		WebElement webElement = findElement(locator, element);
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", webElement);
		waitForCertainPeriod(1000);
	}

	public void hoverOnElement(String locator, ELEMENT_LOCATE_BY ele) {
		Actions action = new Actions(driver);
		action.moveToElement(findElement(locator, ele)).build().perform();
	}
}

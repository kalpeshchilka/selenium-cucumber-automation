package com.dkatalislabs.TestRunner;

import java.io.IOException;
import java.text.ParseException;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.dkatalislabs.testbase.BaseTest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, features = "classpath:features", glue = "com.dkatalislabs.stepDefinations", plugin = {
		"pretty:target/executionReport/cucumber-pretty.txt", "html:target/executionReport/cucumber",
		"json:target/executionReport/cucumber.json", "rerun:target/executionReport/rerun.txt" })

public class TestRunner {
	BaseTest baseTest = new BaseTest();
	private TestNGCucumberRunner testNGCucumberRunner;
	private static String featureName = null;

	@Parameters("browserName")
	@BeforeClass(alwaysRun = true)
	public void setUpClass(String browserName) throws ParseException, IOException {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
		BaseTest.initialization(browserName, getFeatureName());
	}

	@Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) throws ParseException {
		featureName = cucumberFeature.getCucumberFeature().getPath();
		System.out.println("*********************** Executing feature:: " + featureName + " ***********************");
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() throws Exception {
		testNGCucumberRunner.finish();
	}

	@AfterClass(alwaysRun = true)
	public void terminateApp() {
		BaseTest.driver.close();
	}

	public static String getFeatureName() {
		return featureName;
	}
}

package com.dkatalislabs.reporting;

import java.io.File;

import com.aventstack.extentreports.reporter.configuration.ChartLocation;
import com.aventstack.extentreports.reporter.configuration.Theme;
import com.dkatalislabs.testbase.BaseTest;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

public class ExtentManager extends BaseTest{
	private static ExtentReports extent;
	private static String reportFileName = "reports.html";
	private static String reportPath = System.getProperty("user.dir") + "//TestReport";
	private static String reportFileLoc = reportPath + "//" + reportFileName;

	public static ExtentReports getInstance() {
		if (extent == null)
			createInstance();
		return extent;
	}

	// Create an extent report instance
	public static ExtentReports createInstance() {
		String fileName = getReportFileLocation();
		ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(fileName);
		htmlReporter.config().setTestViewChartLocation(ChartLocation.TOP);
		htmlReporter.config().setChartVisibilityOnOpen(true);
		htmlReporter.config().setTheme(Theme.STANDARD);
		htmlReporter.config().setDocumentTitle(fileName);
		htmlReporter.config().setEncoding("utf-8");
		htmlReporter.config().setReportName(fileName);
		extent = new ExtentReports();
		extent.attachReporter(htmlReporter);
		return extent;
	}

	// Select the extent report file location based on platform
	private static String getReportFileLocation() {
		String reportFileLocation = reportFileLoc;
		createReportPath(reportPath);
		 System.out.println("ExtentReport path: " + reportPath + "\n");
		return reportFileLocation;
	}

	// Create the report path if it does not exist
	private static void createReportPath(String path) {
		File testDirectory = new File(path);
		if (!testDirectory.exists()) {
			if (testDirectory.mkdir()) {
				System.out.println("Directory: " + path + " is created!");
			} else {
				System.out.println("Failed to create directory: " + path);
			}
		} else {
			System.out.println("Directory already exists: " + path);
		}
	}
}

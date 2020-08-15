# Dkatalis-Labs-Assignment
This repository contains automation script to Automate ``` Problem Statement 1 | UI Test Automation. ``` Automation scripts are developed using the Cucumber (v 3.x.x) BDD framework with Java as programming language. It generates Extent HTML, Simple HTML and JSON reports as well.


## Installation (pre-requisites)
1. JDK 1.8+ (make sure Java class path is set)
2. Maven (make sure .m2 class path is set)
3. Eclipse
4. Eclipse Plugins for
   * Maven
   * Cucumber
5. Browser driver (make sure you have your desired browser drivers in ``` lib ``` folder under project directory).
   Currently this repository has below drivers:
   * Gecko driver version - [0.27.0](https://github.com/mozilla/geckodriver/releases/tag/v0.27.0), compatible with Mozilla Firefox version ≥79.
   * Chrome driver version - [84.0.4147.30](https://chromedriver.storage.googleapis.com/index.html?path=84.0.4147.30/), compatible with Chrome version 84


## Setup
* Clone the Repo
* Install dependencies ``` mvn install ```

## Running your tests
* To run the test on Chrome Browser, run ``` mvn test -PCardPaymentTest -DbrowserName.USER="chrome" ```
* To run the test on FireFox Browser, run ``` mvn test -PCardPaymentTest -DbrowserName.USER="firefox" ```


## Reporters

### Extent HTML Report:
Generates HTML report at project directory path: ``` /target/executionReport/finalExtentReport.html ```

### Simple HTML Report:
Generates HTML report at project directory path: ``` /target/executionReport/cucumber/index.html ```

### JSON Report:
Generates HTML report at project directory path: ``` /target/executionReport/cucumber.json ```

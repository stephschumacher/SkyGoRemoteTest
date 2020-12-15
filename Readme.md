---
Title: Sky.com Functional Test Pack
Written by: Dr Stephanie Schumacher
Date: 14/12/2020
---

# Sky.com Functional Test Pack in Typescript and Testcafe

<br />

## Setup

Ensure you have the latest version of node:

> `brew update`

> `brew upgrade node`

In the base directory type the following to install everything you need:

> `npm install`

<br />
<br />

## Running The Test Pack


The following table shows the different ways to run the test pack

| Command                   | Description                         |
| ------------------------- | ----------------------------------- |
| `npm run testcafe`        | Run the tests                       |
| `npm run testcafe:report` | Run the tests with reporting        |
| `npm run headless`        | Run in headless mode                |
| `npm run headless:report` | Run in headless mode with reporting |


<br />

## Reports

If reporting is used then the file testreport.html is created the reports directory.

Failing screenshots are embedded in the test report and are saved in:

reports/screenshots/DATE/DATE_TIME_testfixture/testcase.jpg

<br />
<br />


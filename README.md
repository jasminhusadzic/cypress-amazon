## **Prerequisites**

Before you can run tests in Cypress, you need to have the following software installed on your computer:

- Node.js
- npm or yarn
- Typescript

## **Installation**

To install Cypress, run the following command in your terminal:

```bash

npm install cypress --save-dev
```

or

```bash

yarn add cypress --dev

```

This will install Cypress as a dev dependency in your project.

## **Writing Tests**

Tests in Cypress are written in JavaScript and are organized in test files located in the **`cypress/integration`** directory. Each test file can contain multiple tests, which are defined using the **`describe()`** and **`it()`** functions.

Here's an example test file:

```tsx

describe('My Test Suite', () => {
  it('My Test Case', () => {
    cy.visit('https://www.example.com')
    cy.contains('Welcome to Example.com')
    cy.get('#my-button').click()
    cy.url().should('include', '/my-page')
  })
})

```

In this example, we define a test suite called "My Test Suite" using the **`describe()`** function, and a test case called "My Test Case" using the **`it()`** function. In the test case, we use Cypress commands to visit a webpage, interact with a button, and verify that the URL contains a specific string.

## **Running Tests**

Before running tests, we need to setup environment variable CYPRESS_BASE_URL with base url we want to hit, or update config file with properly value.
To run tests in Cypress, open your terminal and navigate to your project directory. Then, run the following command:

```bash

npm run e2e:open
```


This will open the Cypress Test Runner, which is a GUI interface for running tests. In the Test Runner, you can select which test files to run, and click on individual test cases to run them.

Alternatively, you can run tests in headless mode by running the following command:

```bash

npm run e2e:run
```


This will run all tests in the command line, without opening the Test Runner.

## **Conclusion**

That's it! You now know how to install Cypress, write tests, and run them in either the Test Runner or headless mode. 


## Configuration

### Environment Variables

The following environment variable is used in the workflow:

- `CYPRESS_BASE_URL`: The base URL of the application under test.

## Report Artifacts

The workflow produces two types of artifacts:

- **reports**: The test report chunks generated during the `cypress-run` job.
- **mochareports**: The merged HTML report generated during the `cypress-report` job.

The artifacts are stored for a retention period of 7 days.

The workflow will automatically trigger whenever a push event occurs on the `main` branch. You can modify the trigger conditions in the `.github/workflows/main.yml` file to suit your specific requirements.


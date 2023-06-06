// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// @ts-ignore
import addContext = require('mochawesome/addContext');
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('test:after:run', (test, runnable) => {
  const screenshotFolders = test.err.parsedStack[1].fileUrl.split('/e2e/')[1];
  // @ts-ignore
  const screenshot = `screenshots/${screenshotFolders}/${runnable.parent.title} -- ${test.title} (failed).png`;
  // @ts-ignore
  const secondScreenshot = `screenshots/${screenshotFolders}/${runnable.parent.title} -- ${test.title} (failed) (attempt 2).png`;

  // @ts-ignore
  addContext({ test }, screenshot);
  // @ts-ignore
  addContext({ test }, secondScreenshot);
});


// @ts-ignore
Cypress.on('uncaught:exception', (err, runnable) => {
    err.message;
    runnable;
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  
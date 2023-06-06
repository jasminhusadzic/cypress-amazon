import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 16000,
    pageLoadTimeout: 120000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    taskTimeout: 60000,
    videoUploadOnPasses: false,
    video: false,
    watchForFileChanges: false,
    trashAssetsBeforeRuns: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    screenshotsFolder: 'cypress/reports/screenshots',
    reporter: 'mochawesome',
    reporterOptions: {
      reporterEnabled: "mochawesome",
      reportDir: 'cypress/reports',
      reportFilename: '[status]_[datetime]-[name]-testresults',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
  },
});

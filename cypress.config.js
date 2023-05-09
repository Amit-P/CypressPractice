const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
    viewportHeight: 1020,
    viewportWidth: 1360,
    chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/**/*.ts',
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  downloadsFolder: 'cypress/downloads'
});

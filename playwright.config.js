const { defineConfig } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 1,
   workers: 1,
  //testMatch: 'tests/InvalidLogin.spec.js',
  //by default wait tym is 30000
  timeout: 60000,
  //Assertion level tymout
  expect:
  {
    timeout: 60000,
  },

 reporter: [
    ['allure-playwright', {
      detail: true,
      outputFolder: 'allure-results',   // Raw results go here
      suiteTitle: false,
    }],
    ['list']                             // Console output
  ],
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },


  
});

  


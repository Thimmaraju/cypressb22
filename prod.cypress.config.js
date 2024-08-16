const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video:true,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    //defaultCommandTimeout: 20000,
    pageLoadTimeout: 120000,
    viewportWidth:1920,
    viewportHeight:1080,
    retries: {"openMode": 3},
    env:{
      
       "username": "Mahesh",
       "password":"Raju"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

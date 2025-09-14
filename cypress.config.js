const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'egre4e',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://loginxp.vercel.app"
  }
});

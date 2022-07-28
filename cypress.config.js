const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    excludeSpecPattern: '**/examples/**',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {},
  },
});

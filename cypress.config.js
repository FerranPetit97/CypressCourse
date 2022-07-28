const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'y8jie9',
  e2e: {
    baseUrl: 'https://demoqa.com',
    excludeSpecPattern: '**/examples/**',
    viewportWidth: 1920,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},
  },
});

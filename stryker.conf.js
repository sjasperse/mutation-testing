module.exports = function(config) {
  config.set({
    mutate: [
      'src/**/*.js',
      '!src/**/*.tests.js'
    ],

    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest"
  });
};

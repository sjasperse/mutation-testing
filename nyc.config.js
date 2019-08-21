module.exports = {
  all: true,
  reporter: ['lcov'],
  'report-dir': './reports/coverage',
  include: "src/**.js",
  exclude: 'src/**/*.tests.js'
};

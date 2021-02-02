/**
 * Mock the time zone so that running tests on a local computer and on Jenkins yields the same time zone
 */

process.env.TZ = 'UTC';

module.exports = {
  testEnvironment: "node",
  setupFiles: ['<rootDir>/testSetup.js'],
  moduleFileExtensions: ['js', 'vue',],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  // transformIgnorePatterns: [
  //   '/node_modules/(?!@vonagevolta/vue|@vonage/.*|lit-.*|@material/.*).+\\.(js|vue|)$',
  // ],
  collectCoverage: false,
  coverageDirectory: 'coverage-frontend',
  collectCoverageFrom: ['**/components/**/*.vue', '!**/node_modules/**'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  snapshotSerializers: ['jest-serializer-vue'],
  watchPathIgnorePatterns: ['node_modules'],
};


// "jest": {
//   "testEnvironment": "node",
// },

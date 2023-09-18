/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/packages/**/tests/**/*.test.ts',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/js-client/src/generated',
  ]
};
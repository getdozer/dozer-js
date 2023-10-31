/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: [
    '<rootDir>/packages/js-client',
    '<rootDir>/packages/react',
    '<rootDir>/packages/vue',
  ],
  collectCoverage: true,
};

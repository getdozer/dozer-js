/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'react',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/gen',
  ],
  detectOpenHandles: true,
  clearMocks: true,
}

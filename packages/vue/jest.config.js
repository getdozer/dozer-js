/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'react',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  clearMocks: true,
}

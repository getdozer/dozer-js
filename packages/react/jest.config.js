/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    displayName: 'react',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    },
    clearMocks: true,
}
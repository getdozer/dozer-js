module.exports = {
    displayName: 'core',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.ts$": "ts-jest" 
    },
    testMatch: [
        '<rootDir>/tests/**/*.test.ts',
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/generated',
        '<rootDir>/lib',
        '<rootDir>/tests/__mock__',
    ]
}
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  setupFiles: ['<rootDir>/src/jest/index.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageDirectory: '<rootDir>/jest/coverage',
  coveragePathIgnorePatterns: ['.stories.tsx'],
  coverageReporters: ['json', 'lcov'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/jest/utils/mock/style-mock.ts'
  }
}

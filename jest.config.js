module.exports = {
  maxWorkers: 2,
  maxConcurrency: 2,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  roots: ['./src'],
  automock: false,
  collectCoverageFrom: [
    '<rootDir>/src/contexts/**/*.t(s|sx)',
    '<rootDir>/src/gbapi/**/*.t(s|sx)',
    '<rootDir>/src/ui/**/*.t(s|sx)',
    '<rootDir>/src/libs/**/*.t(s|sx)',
    '<rootDir>/src/utils/**/*.t(s|sx)',
    '!<rootDir>/src/App.tsx',
    '!**/*.d.ts',
    '!**/*.(stories|styles|mocks).t(s|sx)',
    '!**/mocks.t(s|sx)',
    '!**/types.ts',
    '!**/*.mocks.t(s|sx)',
    '!<rootDir>src/**/*.test.t(s|sx)',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/contexts/index.tsx'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  transform: {
    '\\.(ts|tsx)$': [
      'ts-jest',
      {
        diagnostics: {
          exclude: ['**'],
        },
      },
      { isolatedModules: true },
    ],
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '@testing-library/jest-dom'],
  coverageReporters: ['lcov'],
  coverageDirectory: './reports',
  moduleFileExtensions: ['tsx', 'ts', 'json', 'js'],
  testRegex: '\\.test\\.(ts|tsx|js)$',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.tsx',
    '\\.png$': '<rootDir>/__mocks__/png.tsx',
  },
  testResultsProcessor: 'jest-sonar-reporter',
};

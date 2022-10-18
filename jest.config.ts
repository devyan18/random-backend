import type { Config } from '@jest/types'
import path from 'path'

const directory = path.join(__dirname, 'src', 'modules')

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    verbose: true,
    setupFiles: ['dotenv/config'],
    testMatch: [`${directory}/**/**/*.test.ts`],
    testEnvironment: 'node',
    detectOpenHandles: true,
    collectCoverage: false,
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    globalTeardown: '<rootDir>/src/tests/jest-globals-teardown.ts',
    forceExit: true
  }
}

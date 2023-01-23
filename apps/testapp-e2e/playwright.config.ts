import type { PlaywrightTestConfig } from '@playwright/test';
import { baseConfig } from '../../playwright.config.base';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config: PlaywrightTestConfig = {
  ...baseConfig,
  testDir: './src/e2e',
  reporter: [
    ['html', { outputFolder: '../../dist/apps/testapp-e2e/playwright-report' }],
    [
      'json',
      {
        outputFile:
          '../../dist/apps/testapp-e2e/playwright-report/test-results.json',
      },
    ],
  ]
};

export default config;

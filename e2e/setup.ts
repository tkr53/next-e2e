import { test as base, expect } from '@playwright/test';
import { resetDb } from './dbUtils';

export const test = base;
export { expect };

// 各テスト前にDBリセット
base.beforeEach(async () => {
  await resetDb();
});

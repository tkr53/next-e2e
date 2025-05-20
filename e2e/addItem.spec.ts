import { test, expect } from './setup';

test('test add item', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // 既に'test'が1件あるので、別名で追加
  await page.getByRole('textbox', { name: 'タイトルを入力' }).click();
  await page.getByRole('textbox', { name: 'タイトルを入力' }).fill('test2');
  await page.getByRole('button', { name: '追加' }).click();
  await expect(page.getByText('test2').first()).toBeVisible();
  await expect(page.getByRole('button', { name: '削除' }).first()).toBeVisible();
});
import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const firstCard = await page.locator('[data-testid="backlog"] .ant-card').first()

    const completedCardCount = await page.locator('[data-testid="completed"] .ant-card').count();
    console.log('completedCardCount', completedCardCount);

    await firstCard.dragTo(page.locator('[data-testid="completed"]'));

    const updatedCompletedCardCount = await page.locator('[data-testid="completed"] .ant-card').count();
    console.log('updatedCompletedCardCount', updatedCompletedCardCount);
    // Expect a title "to contain" a substring.
    await expect(updatedCompletedCardCount).toBeGreaterThan(completedCardCount);
});

test.todo('Add To Do')

test.todo('Move multiple times')
import {test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
});

const TODO_ITEMS = [
    'MECERDES',
    'BMW',
    'HONDA',
    'LEXUS'
];

test.describe('New Todo', () => {
    test('Delete Item In List', async ({page}) => {
        //Create a new todo locator
        const newTodo = page.getByPlaceholder('What needs to be done?');

        //Create 1st todo
        await newTodo.fill(TODO_ITEMS[0]);
        await newTodo.press('Enter');

        //Make sure item 1 is added
        await expect(newTodo).toBeEmpty();
        await expect(page.getByTestId("todo-title")).toHaveText([TODO_ITEMS[0]]);
        //await checkNumberOfTodosInLocalStorage(page, 1);

        //Delete Item
        await page.getByTestId("todo-title").hover();
        await page.getByLabel("Delete").click();
    })
})

// async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
//     return await page.waitForFunction(e => {
//         return JSON.parse(localStorage['react-todos']).length === e;}, expect);
// }
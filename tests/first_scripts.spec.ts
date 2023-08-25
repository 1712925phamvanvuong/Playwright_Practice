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
    test('Should allow me to added todo items', async ({page}) =>{
        //Create a new todo locator
        const newTodo = page.getByPlaceholder('What needs to be done?');
        
        //Create 1st todo
        await newTodo.fill(TODO_ITEMS[0]);
        await newTodo.press('Enter');

        //Make sure item is added
        await expect(page.getByTestId("todo-title")).toHaveText([TODO_ITEMS[0]]);

        //Create 2st todo
        await newTodo.fill(TODO_ITEMS[1]);
        await newTodo.press('Enter');

        //Make sure item 1, 2 are added
        await expect(page.getByTestId("todo-title")).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);

        await checkNumberOfTodosInLocalStorage(page, 2);
    })
})

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
    return await page.waitForFunction(e => {
        return JSON.parse(localStorage['react-todos']).length === e;}, expect);
}
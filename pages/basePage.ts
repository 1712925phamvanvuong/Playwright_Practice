import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string = '/') {
    await this.page.goto(url);
  }

  async wait(time: number) {
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await this.page.waitForTimeout(time);
  }
}

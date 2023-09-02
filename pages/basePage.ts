import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url?: string) {
    const link = url ? url : '/';
    await this.page.goto(link);
  }

  async wait(time: number) {
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await this.page.waitForTimeout(time);
  }
}

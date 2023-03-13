// lost_pass.page.ts
import { expect, Locator, Page } from '@playwright/test';
import { data } from '../tests/test_data';

export class LostPassnPage {
  readonly page: Page;
  readonly login: Locator;
  readonly btnLogin: Locator;
  readonly worningMessage: Locator;
  readonly worningMessage1: Locator;
  readonly unregisteredMessage: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.login = page.getByLabel('Email *');
    this.btnLogin = page.getByRole('button', { name: 'Submit' });
    this.worningMessage = page.getByText('Your account is locked.');
    this.worningMessage1 = page.getByText('Unknown user.');
    this.unregisteredMessage = page.getByText('You haven\'t activated your account yet. If you want to receive a new activation ');
    this.confirmationMessage = page.getByText('An email with instructions to choose a new password has been sent to you.');
  }

  async gotoLoginPage() {
    await this.page.goto(data.lost_password_url);
  }

  async fillValidEmail() {
    await this.login.fill(data.valid_email);
  }

  async fillTestEmail() {
    await this.login.fill(data.test_email);
  }

  async fillInvalidEmail() {
    await this.login.fill(data.invalid_email);
  }

  async clickSubmitButton(){
    await this.btnLogin.click();
  }

  async warningMessage(){
    await expect(this.worningMessage).toBeVisible();
  }

  async warningMessage1(){
    await expect(this.worningMessage1).toBeVisible();
  }

  async checkUnregistereddata(){
    await expect(this.unregisteredMessage).toBeVisible();
  }

  async checkConfirmationMessage(){
    await expect(this.confirmationMessage).toBeVisible();
  }
}

// login.page.ts
import { expect, Locator, Page } from '@playwright/test';
import { data } from '../tests/test_data';

export class LoginPage {
  readonly page: Page;
  readonly login: Locator;
  readonly password: Locator;
  readonly btnLogin: Locator;
  readonly checkbox: Locator;
  readonly worningMessage: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.login = page.getByLabel('Login:');
    this.password = page.getByLabel('Password:');
    this.btnLogin = page.getByRole('button', { name: 'Login »' });
    this.checkbox = page.getByText('Stay logged in');
    this.worningMessage = page.getByText('Invalid user or password');
  }

  async gotoLoginPage() {
    await this.page.goto(data.login_url);
  }

  async fillValidEmail() {
    await this.login.fill(data.valid_email);
  }

  async fillInvalidEmail() {
    await this.login.fill(data.invalid_email);
  }

  async fillInvalidPassword() {
    await this.password.fill(data.invalid_password);
  }

  async fillValidPassword() {
    await this.password.fill(data.valid_password);
  }

  async clickLoginButton(){
    await this.btnLogin.click();
  }

  async warningMessage(){
    await expect(this.worningMessage).toBeVisible();
  }

  async clickCheckBox (){
    await this.checkbox.click();
  }

  async isCheckBoxChecked(){
    await this.checkbox.isChecked();
  }
}

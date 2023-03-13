import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test.describe("login", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
  });

  test("Check unregistered user", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillValidEmail();
    await login.fillValidPassword();
    await login.clickLoginButton();
    await login.warningMessage();
  });

  test("Check only email field with valid data", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillValidEmail();
    await login.clickLoginButton();
    await login.warningMessage();
  });

  test("Check only email field with invalid data", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillInvalidEmail();
    await login.clickLoginButton();
    await login.warningMessage();
  });

  test("Check only password field with valid data", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillValidPassword();
    await login.clickLoginButton();
    await login.warningMessage();
  });

  test("Check only password field with invalid data", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillInvalidPassword();
    await login.clickLoginButton();
    await login.warningMessage();
  });

  test("Check empty fields", async ({ page }) => {
    const login = new LoginPage(page);
    await login.clickLoginButton();
    await login.warningMessage();
  });

  test("Check checkbox", async ({ page }) => {
    const login = new LoginPage(page);
    await login.clickCheckBox();
    await login.isCheckBoxChecked();
  });
});
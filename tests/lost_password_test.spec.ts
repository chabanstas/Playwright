import { test, expect } from "@playwright/test";
import { LostPassnPage } from "../pages/lost_pass.page";

test.describe("login", () => {
  test.beforeEach(async ({ page }) => {
    const lost_pass = new LostPassnPage(page);
    await lost_pass.gotoLoginPage();
  });

  test("Check unregistered user wiwh valid data", async ({ page }) => {
    const lost_pass = new LostPassnPage(page);
    await lost_pass.fillValidEmail();
    await lost_pass.clickSubmitButton();
    await lost_pass.warningMessage1();
  });

  test("Check email field wiwh invalid data", async ({ page }) => {
    const lost_pass = new LostPassnPage(page);
    await lost_pass.fillInvalidEmail();
    await lost_pass.clickSubmitButton();
    await lost_pass.warningMessage1();
  });

  test("Check empty email field", async ({ page }) => {
    const lost_pass = new LostPassnPage(page);
    await lost_pass.clickSubmitButton();
    await lost_pass.warningMessage();
  });

  test("Check registered user wiwh valid data", async ({ page }) => {
    const lost_pass = new LostPassnPage(page);
    await lost_pass.fillTestEmail();
    await lost_pass.clickSubmitButton();
    await lost_pass.checkConfirmationMessage();
  });
});
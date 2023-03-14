# Playwright TS + Allure

- Created 7 test cases for login page and 4 test cases foe lost password page. 
- Testing on Desktop Chrome and Desktop Firefox (check playwright.config.ts).
- Web-Site https://www.redmine.org/

## Requirements

- playwright: 1.31
- allure-commandline: ^2.21
- allure-playwright: ^2.1
- node: ^16

## Clone project

- git clone https://github.com/chabanstas/Playwright-TS---Allure.git

## Install Playwright

- npx playwright install --with-deps

## Run tests

- npm run login_test 
- npm run lost_pass_test

## Allure report

- npm run generate_allure_report
- npm run open_allure

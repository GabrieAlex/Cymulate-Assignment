import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';

    test('sanity test', async ({ page }) => {
    //   await page.goto('https://cymulate.com/');
  
    const loginPage = new LoginPage(page);
    await loginPage.loginToApp();
    await loginPage.signIn();

});
    test('sign with SSO', async ({ page }) => {
      
        const loginPage = new LoginPage(page);
        await loginPage.loginToApp();
        await loginPage.signWithSSO();

    });

    test('missing password', async ({ page }) => {
      
        const loginPage = new LoginPage(page);
        await loginPage.loginToApp();
        await loginPage.forgatPassword();
        
    });
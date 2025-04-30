import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
//import ApplicationURL from "../helpers/ApplicationURL";


 
    test(' sanity test', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.signIn();     
        await loginPage.filterTest();
        await loginPage.validateAttackID();

    });

    
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ApplicationURL from "../helpers/ApplicationURL";
import ActivityLogPage from '../pages/ActivityLogPage';
import ValidateDataPAge from '../pages/ValidateDataPage';


 
    test(' sanity test', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const activityLogPage = new ActivityLogPage(page);
        const validateDataPage = new ValidateDataPAge(page);
        
        await loginPage.signIn();     
        await activityLogPage.filterByType();
        await validateDataPage.validateAttackID();

    });
    

    
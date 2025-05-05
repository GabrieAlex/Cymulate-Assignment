import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ActivityLogPage from '../pages/ActivityLogPage';
import { AttackPage } from '../pages/AttackPage';
import ApplicationUsers from '../helpers/ApplicationUsers';
import ApplicationURL from '../helpers/ApplicationURL';


    //test.setTimeout(60000);

 
    test(' sanity test', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const activityLogPage = new ActivityLogPage(page);
        const attackPage = new AttackPage(page);
        
        await loginPage.signIn(ApplicationUsers.UserName, ApplicationUsers.Password, ApplicationURL.Base_URL);     
        await activityLogPage.filterByType();
        await attackPage.logAttackIds();
    });
    
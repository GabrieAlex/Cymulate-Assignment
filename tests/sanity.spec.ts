import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ActivityLogPage from '../pages/ActivityLogPage';
import { AttackPage } from '../pages/AttackPage';
import ApplicationUsers from '../helpers/ApplicationUsers';


    test.setTimeout(60000);

 
    test(' sanity test', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const activityLogPage = new ActivityLogPage(page);
        const attackPage = new AttackPage(page);
        
        await loginPage.signIn(ApplicationUsers.username, ApplicationUsers.password);     
        await activityLogPage.filterByType();
    
        
        // Wait for attack IDs to appear
        await attackPage.waitForAttackIds();
        await attackPage.getUniqueAttackIds();
        await attackPage.logAttackIds();
        await attackPage.assertAtLeastOneAttackId();
    });
    
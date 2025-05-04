import { expect, Locator, Page } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";

export default class ActivityLogPage {

    private filterbarButton: Locator;
    private typsButton: Locator;
    private advancedButton: Locator;
    private applyFiltersButton: Locator;
    
    constructor(protected page: Page) {
      
        this.filterbarButton= this.page.locator('[data-test-id="filter-bar"] #icon_');
        this.typsButton= this.page.locator('div').filter({ hasText: /^Type$/ }).nth(3) 
        this.advancedButton = this.page.locator('button[test-id=advanced-scenarios]');
        this.applyFiltersButton = this.page.locator('button[test-id=apply-filters]');
    }

    public async filterByType(){
            await this.page.waitForTimeout(5000);
            await this.page.goto(ApplicationURL.ActivityLog_URL, { waitUntil: 'load' });
            await this.filterbarButton.waitFor();
            await this.filterbarButton.click();
            await this.typsButton.click();
            await this.advancedButton.click();
            await this.applyFiltersButton.click();
        }
}
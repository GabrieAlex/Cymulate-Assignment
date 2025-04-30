
import { expect, Locator, Page } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";

export default class LoginPage  {

    private usernameField: Locator;
    private passwordField: Locator;
    private signUpButton: Locator;
    private filterbarButton: Locator;
    private typsButton: Locator;
    private advancedButton: Locator;
    private applyFiltersButton: Locator;
    private attackID1: Locator;
    private attackID2: Locator;
    private attackID3: Locator;



    

    
    constructor(protected page: Page) {
        this.usernameField = this.page.locator('input[test-id=email]');
        this.passwordField = this.page.locator('input[test-id=password]');
        this.signUpButton = this.page.getByRole('button', { name: 'Sign in', exact: true });
        this.filterbarButton= this.page.locator('[data-test-id="filter-bar"] #icon_');
        this.typsButton= this.page.locator('div').filter({ hasText: /^Type$/ }).nth(3) 
        this.advancedButton = this.page.getByRole('button', { name: 'Advanced Scenarios' });
        this.applyFiltersButton = this.page.getByRole('button', { name: 'Apply Filters' });
        this.attackID1 =this.page.getByText('6810766a2218750c2c26c12f');
        this.attackID1 =this.page.getByText('6810766a2218750c2c26c12f');
        this.attackID3= this.page.getByText('680e108ac3a52e2800717448');
        

    }


    public async signIn (){
        await this.page.goto(ApplicationURL.Base_URL);
        //Fill user name 
        await this.usernameField.fill('candidate_user@cymulate1.com');

        // Fill password
        await this.passwordField.fill('ZzAa!@#$43212');  

        //Press sign up button
        await this.signUpButton.click();

    }
    public async filterTest(){
        await this.page.goto(ApplicationURL.ActivityLog_URL);
        await this.filterbarButton.click();
        await this.typsButton.click();
        await this.advancedButton.click();
        await this.applyFiltersButton.click();
        
    }

   public async validateAttackID(){
        
        console.log(this.attackID1);
        console.log(this.attackID2);
        console.log(this.attackID3);

        
    }
}
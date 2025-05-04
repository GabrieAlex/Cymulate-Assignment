import { expect, Locator, Page } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";

export default class LoginPage  {

    private usernameField: Locator;
    private passwordField: Locator;
    private signUpButton: Locator;
    
    constructor( protected page: Page) {

        this.usernameField = this.page.locator('input[test-id=email]');
        this.passwordField = this.page.locator('input[test-id=password]');
        this.signUpButton = this.page.getByRole('button', { name: 'Sign in', exact: true });
    }

    public async signIn (username: string, password:string){
        //Go to URL
        await this.page.goto(ApplicationURL.Base_URL);

        //Fill user name 
        await this.usernameField.fill(username);

        // Fill password
        await this.passwordField.fill(password);  

        //Press sign up button
        await this.signUpButton.click();
    };

}
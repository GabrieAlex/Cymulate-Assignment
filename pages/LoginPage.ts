
import { expect, Locator, Page } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";

export default class LoginPage  {

    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private signUpButton: Locator;
    private signWithSSOButton: Locator;
    private backToLogin: Locator;
    private missingPassword: Locator;
    
    // private default_username = process.env.STANDARD_USER as string;
    // private default_password = process.env.CORRECT_PASSWORD as string;

    
    constructor(protected page: Page) {
        //super(page);
        this.usernameField = this.page.locator('input[test-id=email]');
        this.passwordField = this.page.locator('input[test-id=password]');
        this.loginButton = this.page.getByRole('link', { name: 'Log In' });
        this.signUpButton = this.page.getByRole('button', { name: 'Sign in', exact: true });
        this.signWithSSOButton =  this.page.getByRole('button', { name: 'Sign in with SSO', exact:true });
        this.backToLogin =  this.page.getByRole('button', { name: 'Back to login', exact:true });
        this.missingPassword = this.page.getByRole('link',{name: 'Forgot my password'});

        //this.errorMessage = this.page.locator('[data-test="error"]')
    }

    public async loginToApp(){
        //go to url
        await this.page.goto(ApplicationURL.Base_URL);
        //move to login page
        //await this.page.getByRole('link', { name: 'Log In' }).click();
        await this.loginButton.click();
        //verify title of sign up page
         expect(this.page.getByRole('heading', { name: 'Log in to your account' })).toContainText;

    }

    public async signIn (){
        //Fill user name 
        await this.usernameField.fill('user name');
        //await this.page.locator('input[test-id=email]').fill('asda');

        //expect 
        //await expect (this.page.locator('input[test-id=email]')).toContainText('user name');

        // Fill password
        await this.passwordField.fill('password');  
        //await this.page.locator('input[test-id=password]').fill('asda');

        //Press sign up button
        await this.signUpButton.click();
        //await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();

    }
    public async signWithSSO(){
        //this.page.getByRole('button', { name: 'Sign in with SSO' });
        await this.signWithSSOButton.click();
        await this.backToLogin.click();
        
    }
    public async forgatPassword(){
        await this.missingPassword.click();
    }
}
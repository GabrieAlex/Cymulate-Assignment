import { expect, Locator, Page } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";

export default class ValidateDataPage {

    private attackID1: Locator;
    private attackID2: Locator;
    private attackID3: Locator;

     constructor(protected page: Page) {
          
            this.attackID1 =this.page.locator('[data-test-id="\\31 -3"]').getByText('6810766a2218750c2c26c12f');
            this.attackID2 =this.page.locator('[data-test-id="\\32 -3"]').getByText('6810769925b8a12946d4cbcf');
            this.attackID3= this.page.locator('[data-test-id="\\33 -3"]').getByText('6810766a2218750c2c26c12f');
        }
        
           public async validateAttackID(){
                
                //await this.page.waitForTimeout(5000);
                await this.attackID1.waitFor(); // Waits for the element to appear and be attached to the DOM
                console.log('attackID1:', await this.attackID1.textContent());
                await this.attackID2.waitFor();
                console.log('attackID2:', await this.attackID3.textContent());
                await this.attackID3.waitFor();
                console.log('attackID3:', await this.attackID1.textContent());   
            }
    }
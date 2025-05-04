import { Page, Locator, expect } from '@playwright/test';

export class AttackPage {

  private assessmentIdElements: Locator;

  constructor(protected page: Page) {

    this.assessmentIdElements = this.page.locator('div[test-data-id="assessmentID"]');

  }

 public async waitForAttackIds(timeout: number = 20000){

    await this.assessmentIdElements.first().waitFor({timeout});
    
  }

  public async getUniqueAttackIds() {
    const uniqueIds = new Set<string>();
    const count = await this.assessmentIdElements.count();

    for (let i = 0; i < count; i++) {
      const id = await this.assessmentIdElements.nth(i).textContent();
      if (id && id.trim()) {
        uniqueIds.add(id.trim());
      }
    }

    return Array.from(uniqueIds);
  }

  /**
   * Logs all unique attack IDs to the console.
   */
  public async logAttackIds(){
    const uniqueIds = await this.getUniqueAttackIds();
    console.log(`Found ${uniqueIds.length} unique Attack IDs:`, uniqueIds);
  }

  /**
   * Asserts that at least one Attack ID is present.
   */
  public async assertAtLeastOneAttackId(){
    const uniqueIds = await this.getUniqueAttackIds();
    expect(uniqueIds.length).toBeGreaterThanOrEqual(4);
       // Get and log unique attack IDs
       console.log('Unique Attack IDs:', uniqueIds);
       // Optionally, print the first 3
       console.log('First 3 Attack IDs:', uniqueIds.slice(0, 4));
  }
  
}

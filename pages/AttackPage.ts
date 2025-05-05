import { Page, Locator, expect } from '@playwright/test';
import { Console } from 'console';

export class AttackPage {

  private assessmentIdElements: Locator;
 
  constructor(protected page: Page) {

    this.assessmentIdElements = this.page.locator('div[test-data-id="assessmentID"]');
  
  }

  public async getUniqueAttackIds() {

    await this.assessmentIdElements.first().waitFor();
    await this.assessmentIdElements.last().scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

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

  public async logAttackIds(){
    const uniqueIds = await this.getUniqueAttackIds();
    console.log('First 3 Attack IDs:', uniqueIds.slice(0, 3));
  }
}

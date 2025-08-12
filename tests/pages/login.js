import { APP_URLS, SELECTORS } from '../utils/constants.js';
import {expect} from '@playwright/test'
class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailObj = page.getByLabel('Email');
        this.password = page.getByLabel('Password');
        this.signinBtn = page.locator('data-testid=login-button');
    }

async goto() {
    await this.page.goto(APP_URLS.baseUrl);
  }

async login(username, password) {
    await this.goto()
    await this.emailObj.type(username)
    await this.password.type(password)
    await this.signinBtn.click()
}  

async waitFoLoginToComplete(){
    try {
  var domain_name = APP_URLS.baseUrl
  const match = domain_name.match(/^https:\/\/([^\.]+)\./);
  const subdomain = match ? match[1] : null;   
  await expect(this.page.getByText(subdomain)).toBeVisible()
  await this.page.waitForTimeout(20000);
    }
     catch (error) {
      console.error('An error occurred:', error.message);    
}
}

}

module.exports = LoginPage;
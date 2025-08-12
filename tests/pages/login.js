import { APP_URLS, SELECTORS } from '../utils/constants.js';
class LoginPage {

    constructor(page, username, password) {
        this.page = page;
    }

async goto() {
    await this.page.goto(APP_URLS.baseUrl);
  }

async login() {
    await goto()
    await this.page.getByRole()
     await this.page.getByRole()
}  

}
import {test , expect} from '@playwright/test'
import credentials from '../test-data/credentials.json' assert { type: 'json' };
import LoginPage from '../pages/login'
import { APP_URLS, SELECTORS } from '../utils/constants.js';
test.describe('Login test', () => {

test.beforeAll(async({browser}) =>{
   const context = await browser.newContext();
   const page = await context.newPage();
   var loginPage = new LoginPage(page);
   await loginPage.login(credentials.users.admin_user.email, credentials.users.admin_user.password) 
   await loginPage.waitFoLoginToComplete()
   await context.storageState({ path: 'storageState.json' });
   await context.close();
})

test.use({ storageState: 'storageState.json' });

test('check user able to login', {tag: '@login'}, async ({page})=>{
await page.goto(APP_URLS.baseUrl+APP_URLS.sales_dashboard)    
await expect(page).toHaveTitle(/Contacts : Freshsales Suite/)

})
})
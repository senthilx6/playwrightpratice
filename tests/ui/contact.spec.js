import {test , expect} from '../fixtures/browser.js'
import credentials from '../test-data/credentials.json' assert { type: 'json' };
import LoginPage from '../pages/login.js'
import { APP_URLS, SELECTORS } from '../utils/constants.js';
test.describe('Contact test', () => {

test('check user able to login', {tag: '@contacts'}, async ({myPage})=>{
await myPage.goto(APP_URLS.baseUrl+APP_URLS.sales_dashboard)    
await expect(myPage).toHaveTitle(/Contacts : Freshsales Suite/)

})
})
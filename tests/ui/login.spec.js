import {test , expect} from '@playwright/test'
import credentials from '../test-data/credentials.json' assert { type: 'json' };
test.describe('Login test', () => {

test.beforeAll(async() =>{

})



test('check user able to login', {tag: '@login'}, async ({page})=>{
    await page.goto('https://crmautomationacc650.myfreshworks.dev/login')
    await expect(page).toHaveTitle('Freshworks - Login')

})
})
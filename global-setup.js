
import credentials from './tests/test-data/credentials.json' assert { type: 'json' };
import LoginPage from './tests//pages/login'
const { chromium , firefox, webkit } = require('@playwright/test');

async function globalSetup(config) {

  var project_name = process.env.PW_PROJECT;
  if(project_name.includes('ui')) {
  
  }
}



export default globalSetup;
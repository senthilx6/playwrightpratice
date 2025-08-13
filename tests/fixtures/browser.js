import { test as base } from '@playwright/test';
import config from '../../playwright.config.js';
const { chromium , firefox, webkit } = require('@playwright/test');

export const test = base.extend({

projectProperties: async ({}, use) => {
var project_name = process.env.PW_PROJECT;
var project_details = await getProjectDetails(project_name, config)
await use(project_details);
},  
  myBrowser: async ({ projectProperties }, use) => {
    
    const browser = await browser_intialization(projectProperties.browser, projectProperties.is_headless);
    await use(browser);
  },
  myContext: async ({ myBrowser }, use) => {
    const context = await myBrowser.newContext();
    await use(context);
  },
  myPage: async ({ myContext }, use) => {
    const page = await myContext.newPage();
    await use(page);
  },
});


async function getProjectDetails(project_name,config){
var storage_stage = ''  
var base_url = '' 
var browser = ''   
var is_headless = ''
for(var index = 0 ; index<config.projects.length; index++ ){
 var project = config.projects[index];
 if(project.name === project_name){
    storage_stage = project.use.storageState
    base_url = project.use.baseURL
    browser = project.use.browserName
    is_headless = project.use.is_headless
 }
}
return {"storage_stage" : storage_stage , "base_url" : base_url , "browser" : browser , "is_headless" : is_headless   }
}


async function browser_intialization(browserName , is_headless){
let browserType;

  switch (browserName) {
    case 'chromium':
    case 'chrome':
      browserType = chromium;
      break;
    case 'firefox':
      browserType = firefox;
      break;
    case 'webkit':
    case 'safari':
      browserType = webkit;
      break;
    default:
      throw new Error(`Unknown browser: ${project.use.browserName}`);
  }

  return await browserType.launch({ headless: is_headless });
}
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { tapHomeSection, verifyHomePage } from '../../pageObjects/HomePage';


Given('I tap on the {string} Home section', async (section) => {
    await tapHomeSection(section);
})

Then('the Home page is correctly displayed', async()=>{
    await verifyHomePage();
})
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { tapNavigationSection } from '../../pageObjects/CommonPage';
setDefaultTimeout(120 * 100);


Given('I tap on the {string} navigation tab section', async (section) => {
    await tapNavigationSection(section);
})

Then('I tap the back button', async () => {
    if (device.getPlatform() === 'ios')
        await element(by.id('header-back')).atIndex(0).tap();
    else
        await device.pressBack();
})
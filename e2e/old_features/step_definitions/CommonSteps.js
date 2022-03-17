import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(120 * 100);

Then('I tap the back button', async () => {
    if (device.getPlatform() === 'ios')
        await element(by.id('header-back')).atIndex(0).tap();
    else
        await device.pressBack();
})
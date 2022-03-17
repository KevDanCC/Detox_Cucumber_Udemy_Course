import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { selectDatePickerDate, confirmPickerButtonFunc, selectPickerValue, typeInElement, setTimePickerElement } from '../../helper/Utilities';

setDefaultTimeout(120 * 1000);


When('I enter {string} {string} {string} as Date of Birth', async (day, month, year) => {
    await element(by.id('formLabel-dateOfBirth')).tap();
    await selectDatePickerDate(day, month, year);
    await confirmPickerButtonFunc('confirmDateButton');

});

Then('I select {string} as Start Day', async (day) => {
    await element(by.id('formLabel-startDay')).tap();
    await selectPickerValue('formPicker-startDay', day);
})

Then('I select {string} as Country swiping {string}', async (country, swipeDirection) => {
    await element(by.id('formBackground')).swipe('up');
    await element(by.id('formLabel-country')).tap();
    await selectPickerValue('formPicker-country', country, swipeDirection);
})


Then('I enter {string} {string} as Start Time', async (hours, minutes) => {
    await element(by.id('formBackground')).swipe('up');
    await element(by.id('formLabel-startTime')).tap();
    await element(by.id('formBackground')).swipe('up','fast',0.5);
    
    await setTimePickerElement(hours, minutes, 'formTimePicker');

    await confirmPickerButtonFunc('confirmPickerButton');
})
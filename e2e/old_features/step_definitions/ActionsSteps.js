import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { scrollToElement, typeInElement, selectCalendarDate } from '../../helper/Utilities';

setDefaultTimeout(120 * 1000);



//Interacting with Calendar
Then('I select {string} {string} {string} {string} date in the Calendar', async (weekday, day, month, year) => {
    await scrollToElement( 'formBackground','formLabel-startDate', 300, 'down');
    await element(by.id('formLabel-startDate')).tap();
    await element(by.id('formBackground')).swipe('up');
    await selectCalendarDate(weekday, day, month, year);
})





//Scrolling actions
When('I scroll {string} {int} pixels {string}', async (elementId, pixels, direction) => {
    await element(by.id(elementId)).scroll(pixels, direction);
});
When('I scroll {string} {int} pixels {string} with X: {float} and Y: {float}',
    async (elementId, pixels, direction, x, y) => {
        await element(by.id(elementId)).scroll(pixels, direction, x, y);
    });

When('I scroll {string} to {string} at {int} pixels {string}', async (elementId, targetElementId, pixels, direction) => {
    // await waitFor(element(by.id(targetElementId))).toBeVisible().whileElement(by.id(elementId)).scroll(pixels, direction);
    await scrollToElement(elementId, targetElementId, pixels, direction);
})


Then('I scroll {string} to the {string}', async (elementId, edge) => {
    await element(by.id(elementId)).scrollTo(edge);
})





//Swiping actions
Then('I swipe {string} {string}', async (elementId, direction) => {
    await element(by.id(elementId)).swipe(direction);
})

Then('I swipe {string} {string} {string}', async (elementId, direction, speed) => {
    await element(by.id(elementId)).swipe(direction, speed);
})

Then('I swipe {string} {string} {string} for {float} of the screen', async (elementId, direction, speed, float) => {
    await element(by.id(elementId)).swipe(direction, speed, float);
})



//Typing actions
Then('I type {string} as Name and {string} as Surname', async (nombre, surname) => {
    await element(by.id('formInput-name')).typeText(nombre);
    await element(by.id('formInput-surname')).typeText(surname);
    await element(by.id('formInput-surname')).tapBackspaceKey();

});

Then('I replace {string} in Name and {string} in Surname', async (nombre, surname) => {
    await element(by.id('formInput-name')).replaceText(nombre);
    await element(by.id('formInput-surname')).replaceText(surname);
    await element(by.id('formInput-surname')).tapReturnKey();
});

Then('I enter {string} in Name and {string} in Surname', async (nombre, surname) => {
    await typeInElement(element(by.id('formInput-name')), nombre);
    await typeInElement(element(by.id('formInput-surname')), surname);
})
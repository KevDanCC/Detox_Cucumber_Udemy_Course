import { getText } from "detox-getprops";
import {copyFile as _copyFile, createReadStream} from 'fs-extra';
import tempfile from 'tempfile';
import {promisify} from 'util';

import { getMoth } from "../testData/baseData";


const copyFile= promisify(_copyFile);



export const typeInElement = async (elementBySource, text) => {
    await device.disableSynchronization();
    await elementBySource.replaceText(text);
    await elementBySource.tapReturnKey();
    await device.enableSynchronization();

}

export const scrollToElement = async (elementIdToScroll, targetElementId, pixels, direction) => {
    console.log(elementIdToScroll, targetElementId, pixels, direction+'****')
    // if (direction === 'left' || direction === 'right') {
    //     await scrollHorizontallyToElement(elementIdToScroll, targetElementId, pixels, direction);
    // } else {
        await waitFor(element(by.id(`${targetElementId}`)))
                        .toBeVisible()
                        .whileElement(by.id(`${elementIdToScroll}`))
                        .scroll(pixels, direction, direction==='left' ? 0.25 : NaN);
    // }
}


export const scrollHorizontallyToElement = async (elementId, targetElementId, pixels, direction) => {
    while (await softElementAssertion(targetElementId) === false) {
        const newDirection = direction == 'left' ? 'right' : 'left';
        await element(by.id(elementId)).swipe(newDirection, 'slow', 0.3);
    }
}

export const selectCalendarDate = async (weekday, day, month, year) => {
    while (await softTextAssertion('HEADER_MONTH_NAME', `${month} ${year}`) === false) {
        await element(by.id('native.calendar.CHANGE_MONTH_RIGHT_ARROW')).tap();
    }
    await element(by.label(` ${weekday} ${day} ${month} ${year} `)).atIndex(0).tap();

}




export const softElementAssertion = async (targetElementId) => {
    try {
        await expect(element(by.id(`${targetElementId}`))).toBeVisible();
        // await expect(element(by.id(targetElementId))).toBeVisible();

        return true;
    } catch {
        console.log(targetElementId);

        return false;
    }
}

export const selectDatePickerDate = async (day, month, year) => {
    if (device.getPlatform() === 'ios') {
        await element(by.id('formDatePicker')).setDatePickerDate(`${day}-${month}-${year}`,
            'dd-MM-yyyy');
        // await confirmPickerButton();
    } else {
        // await element(by.text('2003')).tap();
        // while (await softElementAssertion(year) === false) {
        //     await element(by.type('android.widget.ListView')).swipe('down', 'slow', 0.1);
        // }
        // await element(by.text(year)).tap();
        // // await element(by.text(day)).tap();
        // await element(by.text('OK')).tap();

        await element(by.type('android.widget.EditText')).atIndex(2).typeText(year);
        await element(by.type('android.widget.EditText')).atIndex(1).typeText(day);
        await element(by.type('android.widget.EditText')).atIndex(0).clearText();
        await element(by.type('android.widget.EditText')).atIndex(0).typeText(getMoth(month));



    }
}


export const softTextAssertion = async (targetElementId, text) => {
    try {
        console.log(targetElementId);
        await expect(element(by.id(`${targetElementId}`))).toHaveText(text);
        return true;
    } catch {
        console.log(targetElementId);

        return false;
    }
}
export const confirmPickerButtonFunc = async (confirmName) => {
    if (device.getPlatform() === 'ios') {
        await element(by.id(`${confirmName}`)).tap();

    } else {
        await element(by.text('OK')).tap();
    }
}

export const cancelPickerButton = async (cancelName) => {
    if (device.getPlatform() === 'ios') {
        await element(by.id(cancelName)).tap();

    } else {
        await element(by.text('CANCEL')).tap();
    }
}


export const selectPickerValue = async (picker, value, swipeDirection) => {
    if (device.getPlatform() === 'ios') {
        await element(by.id(`${picker}`)).setColumnToValue(0, value);
    } else {
        await element(by.type('android.widget.Spinner')).tap();
        const optionToSelect = element(by.type('android.widget.CheckedTextView').and(by.text(value))).tap();

        while (await softElementAssertion(optionToSelect) === false) {
            await element(by.type('android.widget.ListView')).swipe(swipeDirection, 'slow');

        }
        await optionToSelect.tap();
    }
}

export const setTimePickerElement=async (hours, minutes, idElementPicker)=>{
    console.log(hours, minutes, idElementPicker)
    if (device.getPlatform() === 'ios') {
        await element(by.id(`${idElementPicker}`)).setDatePickerDate(`${hours}:${minutes}`, 'HH:mm');

    } else {

        // If its default/clock
        await element(by.label('Switch to text input mode for the time input.')).tap();

        // If its Spinner
        await typeInElement(element(by.id('android.widget.EditText')).atIndex(0), hours);
        await typeInElement(element(by.id('android.widget.EditText')).atIndex(1), minutes);
    }
    
}


export const getElementText=async(mobileElement)=>{
    if (device.getPlatform() === 'ios') {
    const attributes= await mobileElement.getAttributes();
    return attributes.text;
    
    }else{
        return await getText(mobileElement);
    }
}

export const takeScreenshotStream=async(screenshotName)=>{
    const imagePath= await device.takeScreenshot(screenshotName);
    const persistedImagePath= tempfile('.png');
    await copyFile(imagePath, persistedImagePath);

    return createReadStream(persistedImagePath);
}
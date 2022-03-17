import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { continentBackground, scrollCities, verifyCitiesPage } from '../../pageObjects/CitiesPage';
import { numberCounter, tapCounter, verifyCountersPage } from '../../pageObjects/CountersPage';

setDefaultTimeout(120 * 1000);


When('I check the displayed elements', async()=>{
    await verifyCountersPage();
})

When('I tap over the {string} button and check the {int} numbers of tap', async(buttonName, numberOfTap)=>{
    let count=numberOfTap;
    while(count--){
        await tapCounter(`${buttonName}`);
    }
    await numberCounter(`${buttonName}`, numberOfTap);
})
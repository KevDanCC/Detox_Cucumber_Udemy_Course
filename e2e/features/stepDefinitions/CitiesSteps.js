import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { continentBackground, scrollCities, verifyCitiesPage } from '../../pageObjects/CitiesPage';

setDefaultTimeout(120 * 1000);

When('the Cities page is correctly displayed', async () => {
    await verifyCitiesPage();
})


Then('I scroll {string} at {int} pixels {string} to image number {int}', async (continent, pixels, direction, number) => {
    await scrollCities(continent.toLowerCase(), pixels, direction.toLowerCase(), number - 1);
})

Then('I scroll {string} to the {string}', async (elementId, edge) => {
    // if(device.getPlatform()==='ios'){
    //     await element(by.id(continentBackground(elementId))).scroll(100, edge, 0.7, 0.1);
    // }else{
        await element(by.id(continentBackground(elementId))).scrollTo(edge);
    // }
})
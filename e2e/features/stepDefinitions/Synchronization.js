import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { continentBackground, scrollCities, verifyCitiesPage } from '../../pageObjects/CitiesPage';

setDefaultTimeout(120 * 1000);

When('I toggle the animation\'s switch', async () => {
    await element(by.id('animationSwitch')).tap();
    await expect(element(by.id('animationSwitch'))).toHaveToggleValue(true);
    await element(by.id('animationSwitch')).tap();
    await expect(element(by.id('animationSwitch'))).toHaveToggleValue(false);
})
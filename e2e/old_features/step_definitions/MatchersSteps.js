import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 100);





//Match by multiple matchers
When('I tap on the Water Counter Title by type and text', async () => {
    if (device.getPlatform() === 'ios') {
        await element(by.type('RCTTextView').and(by.text('WATER COUNTER'))).tap();
    }
    else {
        await element(by.type('android.widget.TextView').and(by.text('WATER COUNTER'))).tap();

    }
});

Then('I tap on the Electricity Counter by traits and text', async () => {
    await element(by.traits(['staticText']).and(by.text('ELECTRICITY COUNTER'))).tap();
});

Then('I tap on the Gas Counter by ancestor ID and descendant text', async () => {
    await element(by.id('counterButton').withDescendant(by.text('GAS COUNTER'))).tap();
});

Then('I tap on the Broadband Counter by descendant text and ancestor type', async () => {
    const typeLocator = device.getPlatform() === 'ios' ? 'RCTView' : 'android.view.ViewGroup';

    await element(by.text('BROADBAND COUNTER').withAncestor(by.type(typeLocator))).tap();
});





//Match by ID
When('I tap on the Water Counter by ID', async () => {
    await element(by.id('waterCounter')).longPress(5000); //mili-seg
});

When('I tap on the Electricity Counter by ID', async () => {
    await element(by.id('electricityCounter')).multiTap(3);
});

When('I tap on the Gas Counter by ID', async () => {
    await element(by.id('gasCounter')).multiTap(6);
});

When('I tap on the Broadband Counter by ID', async () => {
    await element(by.id('broadbandCounter')).tap({x:5,y:250}); //tap con coordenadas
});




//Match by label
When('I tap the Home navigation section by label', async () => {
    await element(by.label('Home')).tap();
})


Then('I tap on the Water Counter by label', async () => {
    await element(by.label('waterCounterLabel')).tap();
})




//Match by text
Given('I tap on the Counters section by text', async () => {
    await element(by.text('Counters')).tap();
})

When('I tap on the Water section by text', async () => {
    await element(by.text('WATER COUNTER')).tap();
})

Then('I tap on the Electricity section by text', async () => {
    await element(by.text('ELECTRICITY COUNTER')).tap();
})

When('I tap on the Gas section by text', async () => {
    await element(by.text('GAS COUNTER')).tap();
})

When('I tap on the Broadband section by text', async () => {
    await element(by.text('BROADBAND COUNTER')).tap();
})
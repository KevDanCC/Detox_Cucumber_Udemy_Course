import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(120 * 100);

// Con switch
Given('I tap on the {string} navigation', async(option)=>{
    console.log(option.toLowerCase())
    await element(by.id(`${option.toLowerCase()}NavigationSection`)).tap();
    await element(by.id(`${option.toLowerCase()}NavigationImagen`)).atIndex(0).tap();
});

// Element por elemento
// Then('I tap on the Home navigation', async()=>{
//     await element(by.id('homeNavigationSection')).tap();
//     await element(by.id('homeNavigationImagen')).atIndex(0).tap();
// });
// Given ('I tap on the Members navigation', async()=>{
//     await element(by.id('membersNavigationImagen')).atIndex(0).tap();
//     await element(by.id('membersNavigationSection')).tap();
// });



Then('I tap the Add Member Icon', async()=>{
await element(by.id('memberListHeader')).tap();
await element(by.id('addMemberIcon')).tap();
});
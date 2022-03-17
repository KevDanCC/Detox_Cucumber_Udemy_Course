import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { fillInForm, saveMemberButton, verifyAddMemberPage, verifyDeleteMemberPage, verifyEditMemberPage } from '../../pageObjects/FormPage';
import { addMemberIcon, gettingMember, verifyMemberListPage } from '../../pageObjects/MemberListPage';
import ShowMemberPage from '../../pageObjects/ShowMemberPage';
setDefaultTimeout(120 * 100);

//Delete members
When('I tap on the Trash Button and delete {int} member', async(memberCount)=>{
    await verifyDeleteMemberPage(memberCount);
})



//Edit Member Steps
Then('the Edit Member page is correctly displayed with:', async (formData) => {
    await verifyEditMemberPage(formData.hashes()[0]);
})

Then('I tap on the Edit Member icon', async () => {
    await element(by.id(ShowMemberPage.editMemberIcon)).tap();
});




// Show Member Steps
Then('the Show Member page is correctly displayed with:', async (formData) => {
    console.log(formData);
    console.log(formData.hashes()[0]);
   await  ShowMemberPage.verifyShowMemberPage(formData.hashes()[0]);
})

//Form steps
When('I fill in the form with:', async (formData) => {
    await fillInForm(formData.hashes()[0]);
    await element(by.id(saveMemberButton())).tap();
})


Then('the Add Member page is correctly displayed', async () => {
    await verifyAddMemberPage();
})

When('I tap on the Member number {int}', async (memberNumber) => {
    await element(by.id(gettingMember(memberNumber))).tap();
})




//Member List Steps
When('the Member List page is correctly displayed for {int} members', async (membersCount) => {
    console.log(membersCount)
    await verifyMemberListPage(membersCount);
})


Then('I tap the Add Member icon', async () => {
    // await element(by.id('memberListHeader')).tap();
    await element(by.id(addMemberIcon())).tap();
});
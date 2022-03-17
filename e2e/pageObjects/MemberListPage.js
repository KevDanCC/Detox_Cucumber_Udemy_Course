import { expect as expectChai } from 'chai';
import { getElementText } from "../helper/Utilities"
import TestData from "../testData/TestData"

export const memberListHeader = () => {
    return 'memberListHeader'
}

export const addMemberIcon = () => {
    return 'addMemberIcon'
}

export const noResultsText = () => {
    return 'noResultsText'
}


export const gettingMember = (index) => {
    return `member-${index - 1}`;
}
export const gettingMemberFullName = (index) => {
    return `memberFullName-${index}`;
}
export const gettingMemberId = (index) => {
    return `memberId-${index}`;
}
export const gettingMemberDelete = (index) => {
    return `memberDelete-${index}`;
}


// Functions used in encapsulation

export const verifyMemberListPage = async (membersCount) => {
    console.log(membersCount + '**********');
    await expect(element(by.id(memberListHeader()))).toHaveText('Members');
    await expect(element(by.id(addMemberIcon()))).toBeVisible();
    let value;

    switch (membersCount) {
        case 2:
            // await expect(element(by.id(noResultsText()))).not.toBeVisible();//toHaveText('No Members added in the list');
            await expect(element(by.id(gettingMemberFullName(1)))).toHaveText(`${TestData.getName_2()} ${TestData.getSurname_2()} -`);
             value = await getElementText(element(by.id(gettingMemberId(1))));
            TestData.setId_2(value);
            expectChai(value).equal(TestData.getId_2());
            expectChai(await getElementText(element(by.id(gettingMemberFullName(1))))).contain(TestData.getName_2())
        // await expect(element(by.id(gettingMemberId(0)))).toHaveText(value);
        // break;
        case 1:
            await expect(element(by.id(noResultsText()))).not.toBeVisible();//toHaveText('No Members added in the list');
            await expect(element(by.id(gettingMemberFullName(0)))).toHaveText(`${TestData.getName_1()} ${TestData.getSurname_1()} -`);
             value = await getElementText(element(by.id(gettingMemberId(0))));
            TestData.setId_1(value);
            expectChai(value).equal(TestData.getId_1());
            expectChai(await getElementText(element(by.id(gettingMemberFullName(0))))).contain(TestData.getName_1())
            // await expect(element(by.id(gettingMemberId(0)))).toHaveText(value);
            break;
        case 0:
            await expect(element(by.id(noResultsText()))).toHaveText('No Members added in the list');
            break;
        default:
            console.error('Elemento ingresado de forma erronea');
    }
}
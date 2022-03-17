import moment from "moment";
import { scrollToElement } from "../helper/Utilities";
import { getEmail, getId, getMothNumber, getStartDate } from "../testData/baseData";
import TestData from "../testData/TestData";

class ShowMemberPage {

    //Show Member header elements
    get showMemberHeader() {
        return 'showMemberHeader';
    }
    get editMemberIcon() {
        return 'editMemberIcon';
    }


    //Show Member body elements
    get showMemberBackground() {
        return 'showMemberBackground';
    }
    get memberIdLabel() {
        return 'memberFieldLabel-id';
    }
    get memberIdValue() {
        return 'memberFieldValue-id';
    }
    get memberNameLabel() {
        return 'memberFieldLabel-name';
    }
    get memberNameValue() {
        return 'memberFieldValue-name';
    }
    get memberSurnameLabel() {
        return 'memberFieldLabel-surname';
    }
    get memberSurnameValue() {
        return 'memberFieldValue-surname';
    }
    get memberDateOfBirthLabel() {
        return 'memberFieldLabel-dateOfBirth';
    }
    get memberDateOfBirthValue() {
        return 'memberFieldValue-dateOfBirth';
    }
    get memberStartDayLabel() {
        return 'memberFieldLabel-startDay';
    }
    get memberStartDayValue() {
        return 'memberFieldValue-startDay';
    }
    get memberEmailLabel() {
        return 'memberFieldLabel-email';
    }
    get memberEmailValue() {
        return 'memberFieldValue-email';
    }
    get memberAddressLineOneLabel() {
        return 'memberFieldLabel-addressLineOne';
    }
    get memberAddressLineOneValue() {
        return 'memberFieldValue-addressLineOne';
    }
    get memberAddressLineTwoLabel() {
        return 'memberFieldLabel-addressLineTwo';
    }
    get memberAddressLineTwoValue() {
        return 'memberFieldValue-addressLineTwo';
    }
    get memberCityLabel() {
        return 'memberFieldLabel-city';
    }
    get memberCityValue() {
        return 'memberFieldValue-city';
    }
    get memberPostcodeLabel() {
        return 'memberFieldLabel-postcode';
    }
    get memberPostcodeValue() {
        return 'memberFieldValue-postcode';
    }
    get memberCountryLabel() {
        return 'memberFieldLabel-country';
    }
    get memberCountryValue() {
        return 'memberFieldValue-country';
    }
    get memberStartDateLabel() {
        return 'memberFieldLabel-startDate';
    }
    get memberStartDateValue() {
        return 'memberFieldValue-startDate';
    }
    get memberStartTimeLabel() {
        return 'memberFieldLabel-startTime';
    }
    get memberStartTimeValue() {
        return 'memberFieldValue-startTime';
    }

    async verifyShowMemberPage(formData) {
        //Validar adelante en le video, para que establece un swtch por sobre formData y extracción de ID.
        await expect(element(by.id(this.showMemberHeader))).toHaveText(`Member ${getId(formData.member)}`);
        await expect(element(by.id(this.editMemberIcon))).toBeVisible();
        await expect(element(by.id(this.memberIdLabel))).toHaveText('ID');
        await expect(element(by.id(this.memberIdValue))).toHaveText(`${getId(formData.member)}`)
        await expect(element(by.id(this.memberNameLabel))).toHaveText('Name');
        await expect(element(by.id(this.memberNameValue))).toHaveText(`${(formData.name)}`)
        await expect(element(by.id(this.memberSurnameLabel))).toHaveText('Surname');
        await expect(element(by.id(this.memberSurnameValue))).toHaveText(`${(formData.surname)}`)
        await expect(element(by.id(this.memberDateOfBirthLabel))).toHaveText('Date of Birth');
        await expect(element(by.id(this.memberDateOfBirthValue))).toHaveText(`${(formData.b_day)}-${formData.b_month}-${formData.b_year}`)
        await expect(element(by.id(this.memberStartDayLabel))).toHaveText('Start Day');
        const startDate=moment(getStartDate(formData.member));
        await expect(element(by.id(this.memberStartDayValue))).toHaveText(`${(moment(startDate).format('dddd'))}`)    //formData.start_day    L-D

        await scrollToElement(this.memberPostcodeValue, this.showMemberBackground, 200, 'down');

        await expect(element(by.id(this.memberEmailLabel))).toHaveText('Email');
        await expect(element(by.id(this.memberEmailValue))).toHaveText(`${(getEmail(formData.member))}`)
        await expect(element(by.id(this.memberAddressLineOneLabel))).toHaveText('Address Line One');
        await expect(element(by.id(this.memberAddressLineOneValue))).toHaveText(`${(formData.address_one)}`)
        await expect(element(by.id(this.memberAddressLineTwoLabel))).toHaveText('Address Line Two');
        await expect(element(by.id(this.memberAddressLineTwoValue))).toHaveText(`${(formData.address_two)}`)
        await expect(element(by.id(this.memberCityLabel))).toHaveText('City');
        await expect(element(by.id(this.memberCityValue))).toHaveText(`${(formData.city)}`)
        await expect(element(by.id(this.memberPostcodeLabel))).toHaveText('Postcode');
        await expect(element(by.id(this.memberPostcodeValue))).toHaveText(`${(formData.postcode)}`)


        await element(by.id(this.showMemberBackground)).swipe('up')


        await expect(element(by.id(this.memberCountryLabel))).toHaveText('Country');
        await expect(element(by.id(this.memberCountryValue))).toHaveText(`${(formData.country)}`)
        await expect(element(by.id(this.memberStartDateLabel))).toHaveText('Start Date');
        await expect(element(by.id(this.memberStartDateValue))).toHaveText(
            // `${(formData.start_date)}-${getMothNumber(formData.start_month)}-${formData.start_year}`
            `${(moment(startDate).format('DD'))}-${moment(startDate).format('MM')}-${moment(startDate).format('YYYY')}`
            )
        await expect(element(by.id(this.memberStartTimeLabel))).toHaveText('Start Time');
        await expect(element(by.id(this.memberStartTimeValue))).toHaveText(`${(formData.start_hour)}:${formData.start_minute}`);

    }

}


export default new ShowMemberPage();
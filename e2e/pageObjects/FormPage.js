import moment from "moment";
import { confirmPickerButtonFunc, scrollToElement, selectCalendarDate, selectDatePickerDate, selectPickerValue, setTimePickerElement, typeInElement } from "../helper/Utilities";
import { getEmail, getId, getStartDate } from "../testData/baseData";
import TestData from "../testData/TestData";
import { gettingMemberId } from "./MemberListPage";


//Form headers
export const addMemberHeader = () => {
    return 'addMemberHeader';
}
export const editMemberHeader = () => {
    return 'editMemberHeader';
}

//Form fields
export const formBackground = () => {
    return 'formBackground'
}
export const nameLabel = () => {
    return 'formLabel-name'
}
export const nameInput = () => {
    return 'formInput-name'
}


export const surnameLabel = () => {
    return 'formLabel-surname'
}
export const surnameInput = () => {
    return 'formInput-surname'
}

export const dateOfBirthLabel = () => {
    return 'formLabel-dateOfBirth'
}
export const dateOfBirthInput = () => {
    return 'formInput-dateOfBirth'
}

export const dateOfBirthPicker = () => {
    return 'formDatePicker'
}
export const confirmPickerButton = () => {
    return 'confirmPickerButton'
}
export const cancelPickerButton = () => {
    return 'cancelPickerButton'
}

export const startDayLabel = () => {
    return 'formLabel-startDay'
}
export const startDayInput = () => {
    return 'formInput-startDay'
}
export const startTime = () => {
    return 'formLabel-startTime'
}
export const startDayPicker = () => {
    return 'formPicker-startDay'
}

export const emailLabel = () => {
    return 'formLabel-email'
}
export const emailInput = () => {
    return 'formInput-email'
}

export const addressLineOneLabel = () => {
    return 'formLabel-addressLineOne'
}
export const addressLineOneInput = () => {
    return 'formInput-addressLineOne'
}

export const addressLineTwoLabel = () => {
    return 'formLabel-addressLineTwo'
}
export const addressLineTwoInput = () => {
    return 'formInput-addressLineTwo'
}


export const cityLabel = () => {
    return 'formLabel-city'
}
export const cityInput = () => {
    return 'formInput-city'
}

export const postcodeLabel = () => {
    return 'formLabel-postcode'
}
export const postcodeInput = () => {
    return 'formInput-postcode'
}


export const countryLabel = () => {
    return 'formLabel-country'
}
export const countryInput = () => {
    return 'formInput-country'
}
export const countryPicker = () => {
    return 'formPicker-country'
}

export const startDateLabel = () => {
    return 'formLabel-startDate'
}
export const startDateInput = () => {
    return 'formInput-startDate'
}

export const startTimeLabel = () => {
    return 'formLabel-startTime'
}
export const startTimeInput = () => {
    return 'formInput-startTime'
}
export const startTimePicker = () => {
    return 'formTimePicker'
}


export const saveMemberButton = () => {
    return 'saveMemberButton'
}



//Delete elements
export const deleteMemberIcon = (memberIndex) => {
    return `memberDelete-${memberIndex}`
}

export const confirmModal = (testName) => {
    return `confirmModal-${testName}`
}
export const textModal = (testName) => {
    return `textModal-${testName}`
}
export const modalYesButton = (testName) => {
    return `modalYesButton-${testName}`
}
export const modalNoButton = (testName) => {
    return `modalNoButton-${testName}`
}

export const memberListCreen=()=>{
    return 'memberListScreen'
}


//Functions used in encapsulation
export const verifyAddMemberPage = async () => {
    await expect(element(by.id(addMemberHeader()))).toHaveText('Add Member');
    await verifyFormLabels();

    await expect(element(by.id(nameInput()))).toHaveText('');
    await expect(element(by.id(surnameInput()))).toHaveText('');
    await expect(element(by.id(dateOfBirthInput()))).toHaveText('');
    await expect(element(by.id(startDayInput()))).toHaveText('');
    await expect(element(by.id(emailInput()))).toHaveText('');

    await scrollToElement(formBackground(), postcodeInput(), 150, 'down');

    await expect(element(by.id(addressLineOneInput()))).toHaveText('');
    await expect(element(by.id(addressLineTwoInput()))).toHaveText('');
    await expect(element(by.id(cityInput()))).toHaveText('');

    await element(by.id(formBackground())).swipe('up');

    await expect(element(by.id(postcodeInput()))).toHaveText('');
    await expect(element(by.id(countryInput()))).toHaveText('');
    await expect(element(by.id(startDateInput()))).toHaveText('');
    await expect(element(by.id(startTimeInput()))).toHaveText('');

    await expect(element(by.id(saveMemberButton()))).toBeVisible();

    await element(by.id(formBackground())).swipe('down');


}


export const verifyEditMemberPage = async (formData) => {
    await expect(element(by.id(editMemberHeader()))).toHaveText(`Edit Member ${getId(formData.member)}`);
    await verifyFormLabels();

    await expect(element(by.id(nameInput()))).toHaveText(formData.name);
    await expect(element(by.id(surnameInput()))).toHaveText(formData.surname);
    await expect(element(by.id(dateOfBirthInput()))).toHaveText(`${formData.b_day}-${formData.b_month}-${formData.b_year}`);
    const startDate = moment(getStartDate(formData.member));
    await expect(element(by.id(startDayInput()))).toHaveText(moment(startDate).format('dddd'));
    await expect(element(by.id(emailInput()))).toHaveText(getEmail(formData.member));

    await scrollToElement(formBackground(), postcodeInput(), 150, 'down');

    await expect(element(by.id(addressLineOneInput()))).toHaveText(formData.address_one);
    await expect(element(by.id(addressLineTwoInput()))).toHaveText(formData.address_two);
    await expect(element(by.id(cityInput()))).toHaveText(formData.city);

    await element(by.id(formBackground())).swipe('up');

    await expect(element(by.id(postcodeInput()))).toHaveText(formData.postcode);
    await expect(element(by.id(countryInput()))).toHaveText(formData.country);
    await expect(element(by.id(startDateInput()))).toHaveText(
        `${moment(startDate).format('DD')}-${moment(startDate).format('MM')}-${moment(startDate).format('YYYY')}`
    );
    await expect(element(by.id(startTimeInput()))).toHaveText(`${formData.start_hour}:${formData.start_minute}`);


    await expect(element(by.id(saveMemberButton()))).toBeVisible();

    await element(by.id(formBackground())).swipe('down');


}



export const verifyDeleteMemberPage = async (memberCount) => {

    await expect(element(by.id(deleteMemberIcon(0)))).toBeVisible();
    await element(by.id(deleteMemberIcon(0))).tap();

    await expect(element(by.id(confirmModal(memberListCreen())))).toBeVisible();
    await expect(element(by.id(textModal(memberListCreen())))).toHaveText(`Are you sure you want to delete ${TestData.getName_1()} ${TestData.getSurname_1()}?`)

    await expect(element(by.id(modalYesButton(memberListCreen())))).toBeVisible();
    await expect(element(by.id(modalNoButton(memberListCreen())))).toBeVisible();
    
    
    await element(by.id(modalYesButton(memberListCreen()))).tap();

}




//Support functions
export const verifyFormLabels = async () => {
    await expect(element(by.id(nameLabel()))).toHaveText('Name:');
    await expect(element(by.id(surnameLabel()))).toHaveText('Surname:');
    await expect(element(by.id(dateOfBirthLabel()))).toHaveText('Date of Birth:');
    await expect(element(by.id(startDayLabel()))).toHaveText('Start Day:');
    await expect(element(by.id(emailLabel()))).toHaveText('Email:');

    await scrollToElement(formBackground(), postcodeInput(), 150, 'down');

    await expect(element(by.id(addressLineOneLabel()))).toHaveText('Address Line One:');
    await expect(element(by.id(addressLineTwoLabel()))).toHaveText('Address Line Two:');
    await expect(element(by.id(cityLabel()))).toHaveText('City:');

    await element((by.id(formBackground()))).swipe('up');

    await expect(element(by.id(postcodeLabel()))).toHaveText('Postcode:');
    await expect(element(by.id(countryLabel()))).toHaveText('Country:');
    await expect(element(by.id(startDateLabel()))).toHaveText('Start Date:');
    await expect(element(by.id(startTimeLabel()))).toHaveText('Start Time:');

    await element((by.id(formBackground()))).swipe('down');

}


export const fillInForm = async (formData) => {
    console.log(JSON.stringify(formData));
    await typeInElement(element(by.id(nameInput())), formData.name);
    await typeInElement(element(by.id(surnameInput())), formData.surname);
    await element(by.id(dateOfBirthInput())).tap();
    await selectDatePickerDate(formData.b_day, formData.b_month, formData.b_year);
    await confirmPickerButtonFunc('confirmDateButton');
    await element(by.id(startDayLabel())).tap();
    const startDate = generateRandomDate();
    await selectPickerValue(startDayPicker(), moment(startDate).format('dddd').toString(), 'down');
    const email = generateRandomEmail();

    await typeInElement(element(by.id(emailInput())), email);

    await scrollToElement(formBackground(), postcodeInput(), 150, 'down');

    await typeInElement(element(by.id(addressLineOneInput())), formData.address_one);
    await typeInElement(element(by.id(addressLineTwoInput())), formData.address_two);

    await element(by.id(formBackground())).swipe('up');

    await typeInElement(element(by.id(cityInput())), formData.city);
    await typeInElement(element(by.id(postcodeInput())), formData.postcode);
    await element(by.id(countryLabel())).tap();

    await element(by.id(formBackground())).swipe('up', 'fast', 0.25);

    await selectPickerValue(countryPicker(), formData.country, 'up');
    await element(by.id(startDateLabel())).tap();

    await element(by.id(formBackground())).swipe('up', 'fast', 0.25);

    await selectCalendarDate(
        moment(startDate).format('dddd'),  // formData.start_day,  L-D
        moment(startDate).format('D'),  // formData.start_date,    1-31     DD= 01-31
        moment(startDate).format('MMMM'),  // formData.start_month, 
        moment(startDate).format('YYYY'),  // formData.start_year
    );

    await element(by.id(startTimeLabel())).tap();
    await setTimePickerElement(formData.start_hour, formData.start_minute, 'formTimePicker');

    await element(by.id(formBackground())).swipe('up', 'fast', 0.25);

    await confirmPickerButtonFunc('confirmPickerButton');

    saveMemberData(formData.member, formData.name, formData.surname, email, startDate);
}

export const saveMemberData = (memberNumber, name, surname, email, startDate) => {
    switch (memberNumber) {
        case '1':
            TestData.setName_1(name);
            TestData.setSurname_1(surname);
            TestData.setEmail_1(email);
            TestData.setStartDate_1(startDate);

            break;
        case '2':
            TestData.setName_2(name);
            TestData.setSurname_2(surname);
            TestData.setEmail_2(email);
            TestData.setStartDate_2(startDate);
            break;

        default:
            console.error('elememento no encontrado');
            break;
    }
}

export const generateRandomEmail = () => {
    const values = '123456789';
    let email = 'test_';
    for (let i = 0; i <= 5; i++) {
        email += values.charAt(Math.round(values.length * Math.random()));
    }
    email += '@testDomain.com';
    return email;
}

export const generateRandomDate = () => {

    const randomDay = Math.floor(Math.random() * 90); //Se genera un random entre 1 a 90
    let date = moment().add(randomDay, 'days') //Del dia hoy, agrega N cantidad de días segun randomDay
    if (moment(date).format('MMMM') === 'March') {
        date = moment(date).add(1, 'month'); //Si cae en mes marzo, avanzará 1 mes debido a un BUG que no puede trabajar con Marzo la libreria.
    }
    return date;
}
import { assert } from "chai";
import TestData from "./TestData";

export const getId=(memberNumber)=>{
    switch(memberNumber){
        case '1':
            return TestData.getId_1();
        case '2':
            return TestData.getId_2();
        default:
            assert.fail(`El numero ingresado ${memberNumber} es invalido para ID`)
    }

}
export const getEmail=(memberNumber)=>{
    switch(memberNumber){
        case '1':
            return TestData.getEmail_1();
        case '2':
            return TestData.getEmail_2();
        default:
            assert.fail(`El numero ingresado ${memberNumber} es invalido para Email`)
    }

}

export const getStartDate=(memberNumber)=>{
    switch(memberNumber){
        case '1':
            return TestData.getStartDate_1();
        case '2':
            return TestData.getStartDate_2();
        default:
            assert.fail(`El numero ingresado ${memberNumber} es invalido para Dates`)
    }

}

export const getMoth=(month)=>{
    switch(month){
        case '01':
            return 'Jan';
        case '02':
            return 'Feb' ;
        case '03':
            return 'Mar';
        case '04':
            return 'Apr';
        case '05':
            return 'May';
        case '06':
            return 'Jun';
        case '07':
            return 'Jul';
        case '08':
            return 'Aug';
        case '09':
            return 'Sep';
        case '10':
            return 'Oct';
        case '11':
            return 'Nov';
        case '12':
            return 'Dec';
        default: 'Sin opcion';
    }
}

export const getMothNumber=(month)=>{
    switch(month){
        case 'January':
            return '01';
        case 'February':
            return '02' ;
        case 'March':
            return '03';
        case 'April':
            return '04';
        case 'May':
            return '05';
        case 'June':
            return '06';
        case 'July':
            return '07';
        case 'August':
            return '08';
        case 'Septembre':
            return '09';
        case 'Octuber':
            return '10';
        case 'November':
            return '11';
        case 'December':
            return '12';
        default: 'Sin opcion';
    }
}
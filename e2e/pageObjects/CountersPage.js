//Counters buttons
export const waterButton=()=>{
    return 'counterButton-waterCounter';
}
export const electricityButton=()=>{
    return 'counterButton-electricityCounter';
}
export const gasButton=()=>{
    return 'counterButton-gasCounter';
}
export const broadbandButton=()=>{
    return 'counterButton-broadbandCounter';
}


//Counters labels
export const waterLabel=()=>{
    return 'counterLabel-waterCounter'
}
export const electricityLabel=()=>{
    return 'counterLabel-electricityCounter'
}
export const gasLabel=()=>{
    return 'counterLabel-gasCounter'
}
export const broadbandLabel=()=>{
    return 'counterLabel-broadbandCounter'
}



//Counters Number
export const waterNumber=()=>{
    return 'counterNumber-waterCounter'
}
export const electricityNumber=()=>{
    return 'counterNumber-electricityCounter'
}
export const gasNumber=()=>{
    return 'counterNumber-gasCounter'
}
export const broadbandNumber=()=>{
    return 'counterNumber-broadbandCounter'
}


export const verifyCountersPage=async()=>{
    await expect(element(by.id(waterLabel()))).toHaveText('WATER COUNTER');
    await expect(element(by.id(electricityLabel()))).toHaveText('ELECTRICITY COUNTER');
    await expect(element(by.id(gasLabel()))).toHaveText('GAS COUNTER');
    await expect(element(by.id(broadbandLabel()))).toHaveText('BROADBAND COUNTER');

    await expect(element(by.id(waterNumber()))).toHaveText('0');
    await expect(element(by.id(electricityNumber()))).toHaveText('0');
    await expect(element(by.id(gasNumber()))).toHaveText('0');
    await expect(element(by.id(broadbandNumber()))).toHaveText('0');
}

export const tapCounter=async(buttonName)=>{
    await element(by.id(`counterButton-${buttonName}Counter`)).tap();
}

export const numberCounter=async(numberLabelName, number)=>{
    await expect(element(by.id(`counterNumber-${numberLabelName}Counter`))).toHaveText(`${number}`);

}
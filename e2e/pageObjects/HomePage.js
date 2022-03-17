export const counterSection = () => {
    return element(by.id('homeSectionText-counters'));
}

export const memberSection = () => {
    return element(by.id('homeSectionText-members'));
}

export const citiesSection = () => {
    return element(by.id('homeSectionText-cities'));
}

export const animationSection = () => {
    return element(by.id('homeSectionText-animation'));
}

export const extrasSection = () => {
    return element(by.id('homeSectionText-extras'));
}

export const verifyHomePage=async()=>{
    await expect (counterSection()).toHaveText('Counters');
    await expect (memberSection()).toHaveText('Member List');
    await expect (citiesSection()).toHaveText('Cities');
    await expect (animationSection()).toHaveText('Animation');
    await expect (extrasSection()).toHaveText('Extras');
}

export const tapHomeSection = async(section) => {
    switch (section) {
        case 'Counters':
            await counterSection().tap();
            break;
        case 'Members':
            await memberSection().tap();
            break;
        case 'Cities':
            await citiesSection().tap();
            break;
        case 'Animation':
            await animationSection().tap();
            break;
        default:
            console.error('No hay elementos con esa coincidencia');
    }
}
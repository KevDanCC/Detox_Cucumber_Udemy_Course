export const homeNavigationImage = () => {
    return element(by.id('homeNavigationImagen')).atIndex(0);
}
export const homeNavigationSection = () => {
    return element(by.id('homeNavigationSection')).atIndex(0);
}

export const citiesNavigationImage = () => {
    return element(by.id('citiesNavigationImagen')).atIndex(0);
}

export const citiesNavigationSection = () => {
    return element(by.id('citiesNavigationSection')).atIndex(0);
}

export const membersNavigationImage = () => {
    return element(by.id('membersNavigationImagen')).atIndex(0);
}

export const membersNavigationSection = () => {
    return element(by.id('membersNavigationSection')).atIndex(0);
}


export const tapNavigationSection = async (section) => {
    switch (section) {
        case 'Home':
            await expect(homeNavigationImage()).toBeVisible();
            await homeNavigationSection().tap();
            break;
        case 'Cities':
            await expect(citiesNavigationImage()).toBeVisible();
            await citiesNavigationSection().tap();
            break;
        case 'Members':
            await expect(membersNavigationImage()).toBeVisible();
            await membersNavigationSection().tap();
            break;
        default:
            console.error('No hay elementos con esa coincidencia');
    }
}

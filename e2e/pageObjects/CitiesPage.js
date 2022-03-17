import { scrollHorizontallyToElement, scrollToElement } from "../helper/Utilities";

export const citiesHeader = () => {
    return (('citiesHeader'));
}

export const citiesBackground = () => {
    return (('citiesBackground'));
}

//Europe elements
export const europeImage = (imageIndex) => {
    return ((`image-europe-${imageIndex}`));
}
export const europeImageTitle = (imageIndex) => {
    return ((`imageTitle-europe-${imageIndex}`));
}

//USA-Canada elements
export const usacanadaImage = (imageIndex) => {
    return ((`image-usacanada-${imageIndex}`));
}
export const usacanadaImageTitle = (imageIndex) => {
    return ((`imageTitle-usacanada-${imageIndex}`));
}

//Asia elements
export const asiaImage = (imageIndex) => {
    return ((`image-asia-${imageIndex}`));
}
export const asiaImageTitle = (imageIndex) => {
    return ((`imageTitle-asia-${imageIndex}`));
}



//Dynamic objects
export const continentBackground=(continent)=>{
    return ((`imageBackground-${continent}`));
}
export const continentLabel=(continent)=>{
    return ((`continentLabel-${continent}`));
}
export const cityTitle=(continent,index)=>{
    return ((`imageTitle-${continent}-${index}`));
}
export const cityImage=(continent, index)=>{
    return ((`image-${continent}-${index}`));
}



//Functions used in encapsulation
export const verifyCitiesPage = async () => {
    await expect(citiesHeader()).toHaveText('Cities');

    await expect(continentLabel('europe')).toHaveText('Europe');
    await expect(europeImageTitle(0)).toBeVisible();
    await expect(europeImage(0)).toBeVisible();

    await expect(continentLabel('usacanada')).toHaveText('USA / Canada');
    await expect(usacanadaImageTitle(0)).toBeVisible();
    await expect(usacanadaImageTitle(0)).toBeVisible();

    await citiesBackground().swipe('up');

    await expect(continentLabel('asia')).toHaveText('Asia');
    await expect(asiaImageTitle(0)).toBeVisible();
    await expect(asiaImage(0)).toBeVisible();

    await citiesBackground().swipe('down');
}

export const scrollCities=async(continent, pixels,  direction, number)=>{
console.log(continent, pixels,  direction, number+'///////')
    //Find the element/ need to scroll?
    if(direction==='right'){
        await scrollToElement(citiesBackground(),cityImage(continent, 0), 100, 'down');
    }
    // await scrollHorizontallyToElement(continentBackground(continent),  cityImage(continent, number),0,direction,);
    await scrollToElement(continentBackground(continent),  cityImage(continent, number),pixels,direction,);
    await expect(element(by.id(`${cityTitle(continent, number)}`))).toBeVisible();
    await expect(element(by.id(`${cityImage(continent, number)}`))).toBeVisible();
}
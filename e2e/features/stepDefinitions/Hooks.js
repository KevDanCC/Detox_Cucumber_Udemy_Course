import { BeforeAll, Before, AfterAll } from '@cucumber/cucumber';
import { init, cleanup } from 'detox';
import { detox as config } from '../../../package.json';
import TestData from '../../testData/TestData';


BeforeAll({ timeout: 60 * 1000 }, async () => {
    await init(config);
});

Before(async (testCase) => {
    let instanceBoolean = true;
    for (let i = 0; i < testCase.pickle.tags.length; i++) {
        let tag = testCase.pickle.tags[i].name;
        if ((tag === '@addmembers' || TestData.getLastTag()==='@addmembers') 
        || (tag === '@editMembers' || TestData.getLastTag()==='@editMembers')
        ) {
            instanceBoolean = false;
        }else if((tag==='@addmembers') || (tag==='@editMembers')){
            TestData.setLastTag(tag);
        }
    }
    await device.launchApp({ delete: instanceBoolean, newInstance: true });

});


AfterAll(async () => {
    await cleanup();
})
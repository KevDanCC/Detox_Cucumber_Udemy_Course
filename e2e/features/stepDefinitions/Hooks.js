import { BeforeAll, Before, AfterAll, After, AfterStep } from '@cucumber/cucumber';
import { init, cleanup, afterEach, beforeEach } from 'detox';
import moment from 'moment';
import { detox as config } from '../../../package.json';
import { takeScreenshotStream } from '../../helper/Utilities';
import TestData from '../../testData/TestData';
import {mkdirp} from 'fs-extra';
import replace from 'replace-in-file';
import { getReportValues } from '../../helper/ReportGeneration';
let executionStart;

BeforeAll({ timeout: 120 * 1000 }, async () => {
    executionStart=moment();
    console.log('Execution startttt::', moment(executionStart).format('HH:mm:ss'));
    await init(config);
});


Before(async (testCase) => {
    let instanceBoolean = true;
    for (let i = 0; i < testCase.pickle.tags.length; i++) {
        let tag = testCase.pickle.tags[i].name;
        if ((tag === '@addmembers' || TestData.getLastTag() === '@addmembers')
            || (tag === '@editMembers' || TestData.getLastTag() === '@editMembers')
        ) {
            instanceBoolean = false;
        } else if ((tag === '@addmembers') || (tag === '@editMembers')) {
            TestData.setLastTag(tag);
        }
    }
    await device.launchApp({ delete: instanceBoolean, newInstance: true });


    const testSummary = {
        fullName: testCase.pickle.name,
        status: 'running'
    }

    await beforeEach(testSummary);
});

AfterStep(async function(step){
    const date = moment().format('DD-MM-YYY_HH-mm-ss_a');

    if (step.result.status === 'FAILED') {
        // const scenarioName = step.pickle.name.replace(/\s+/g, '-');
        const stepName=step.pickleStep.text.replace(/\s+/g, '-');
        await this.attach(await takeScreenshotStream(`${device.getPlatform()}_${stepName}_${date}`),'image/png');
        
    }
})

After(async (scenario)=>  {

    const testSummary = {
        fullName: scenario.pickle.name,
        status: scenario.result.status.toLowerCase()
    }

    // if (scenario.result.status === 'FAILED') {
    //     const scenarioName = scenario.pickle.name.replace(/\s+/g, '-');
    //     await device.takeScreenshot(`${device.getPlatform()}_${scenarioName}_${date}`);
    //     await this.attach(await takeScreenshotStream(),'image/png');
    // }

    await afterEach(testSummary);
});



AfterAll(async () => {
    const deviceOS=device.getPlatform();
    await cleanup();
    const executionEnd=moment();
    console.log('Execution Finish::', moment(executionEnd).format('HH:mm:ss'));

    const options={
        files: 'e2e/Gulpfile.js',
        from: new RegExp('reporter.generate.*'),
        to: `reporter.generate(${getReportValues(deviceOS, executionStart, executionEnd)})`
    }

    await replace(options);

});
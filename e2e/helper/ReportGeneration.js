import moment from "moment";

export const getReportValues = (deviceOs, executionStart, executionEnd) => {
    const deviceOS = deviceOs === 'ios' ? 'ios' : 'android';
    const deviceName = deviceOS === 'ios' ? 'iPhone 12' : 'Pixel XL';
    const deviceOSVersion = deviceOS === 'ios' ? '14.5' : '10';

    return JSON.stringify({
        jsonDir: '.tmp/',
        reportPath: 'reports/',
        pageTitle: `Pinnacle QA - ${deviceOS} Test Automation Report`,
        reportName: `Pinnacle QA - ${deviceOS} Test Automation Report`,
        displayDuration: true,
        metadata: {
            device: deviceName,
            platform: {
                name: deviceOS,
                version: deviceOSVersion
            },
            app: {
                name: 'membersApp',
                version: '1.0.0',
            }
        },
        customData: {
            title: 'Run Information',
            data: [
                {
                    label: 'Execution Date',
                    value: moment().format('dddd, Do of MMMM YYYY')
                },
                {
                    label: 'Execution Start Time',
                    value: moment(executionStart).format('HH:mm:ss')
                },
                {
                    label: 'Execution End Time',
                    value: moment(executionEnd).format('HH:mm:ss')
                },
                {
                    label: 'Execution Duration',
                    value: moment.utc(moment(executionEnd, 'DD/MM/YYYY HH:mm:ss').diff(moment(executionStart, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss')
                },
                {
                    labe: 'Environment',
                    value: 'UAT'
                },
                {
                    labe: 'Framework',
                    value: 'Detox'
                }
            ]
        }
    })
}
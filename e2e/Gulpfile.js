const gulp = require('gulp');
const reporter = require('multiple-cucumber-html-reporter');
const moment = require('moment');




gulp.task('report-generation', async () => {
    reporter.generate({"jsonDir":".tmp/","reportPath":"reports/","pageTitle":"Pinnacle QA - ios Test Automation Report","reportName":"Pinnacle QA - ios Test Automation Report","displayDuration":true,"metadata":{"device":"iPhone 12","platform":{"name":"ios","version":"14.5"},"app":{"name":"membersApp","version":"1.0.0"}},"customData":{"title":"Run Information","data":[{"label":"Execution Date","value":"Wednesday, 23rd of March 2022"},{"label":"Execution Start Time","value":"12:57:37"},{"label":"Execution End Time","value":"12:57:57"},{"label":"Execution Duration","value":"00:00:19"},{"labe":"Environment","value":"UAT"},{"labe":"Framework","value":"Detox"}]}})
})
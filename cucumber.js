const arguments=[
'--require-module @babel/register',
'e2e/features/*/*.feature',
'--publish-quiet',
'--format json:e2e/.tmp/cucumber-json-report.json'
].join(' ');

module.exports={
    default:arguments
}
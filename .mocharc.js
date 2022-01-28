module.exports = {
    reporter: 'node_modules/mochawesome',
    'reporter-option': [
        'reportDir=testReport',
        'overwrite=true',
        'reportTitle=My\ Custom\ Title',
        'showPassed=false',
        'charts=true'
    ],
};

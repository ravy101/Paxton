var nodeUnit = require('nodeUnit'),
    assert = require('assert'),
    paxton = require('../paxton.js'),
    testCase = {
        PaxtonReceivesUserInput: function () {
            // a string is passed to paxton
            var response = paxton.query('search string');
            // paxton aknowedges the receipt
            assert(response === '200', 'paxton.query() returns nothing');
        }
    };

nodeUnit.test(testCase);
/* jshint node: true */
'use strict';

var vows   = require('vows'),
    sc     = require('../lib/sc.js'),
    assert = require('assert');

vows.describe('es5toString').addBatch({
    '1'   : { topic: 1,   'yields "1"'   : function (topic) { assert.equal(topic, "1");   } },
    '0.5' : { topic: 0.5, 'yields "0.5"' : function (topic) { assert.equal(topic, "0.5"); } },
}).export(module);

// expandedToString([1,2,3]);
// getClass([1,2,3]);
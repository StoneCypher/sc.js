/* jshint node: true */
'use strict';

var vows   = require('vows'),
    sc     = require('../lib/sc.js'),
    assert = require('assert');

vows.describe('es5toString').addBatch({
    '1'       : { topic: sc.es5protoToString(1),       'yields "[object Number]"' : function (topic) { assert.equal(topic, "[object Number]"); } },
    '0.5'     : { topic: sc.es5protoToString(0.5),     'yields "[object Number]"' : function (topic) { assert.equal(topic, "[object Number]"); } },
    '[1,2,3]' : { topic: sc.es5protoToString([1,2,3]), 'yields "[Object Array]"'  : function (topic) { assert.equal(topic, "[object Array]");  } },
}).export(module);

vows.describe('getClass').addBatch({
    '1'       : { topic: sc.getClass(1),       'yields "Number"' : function (topic) { assert.equal(topic, "Number"); } },
    '0.5'     : { topic: sc.getClass(0.5),     'yields "Number"' : function (topic) { assert.equal(topic, "Number"); } },
    '[1,2,3]' : { topic: sc.getClass([1,2,3]), 'yields "Array"'  : function (topic) { assert.equal(topic, "Array");  } },
}).export(module);

// expandedToString([1,2,3]);
// getClass([1,2,3]);
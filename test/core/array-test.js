var vows = require('vows'),
	load = require('../load'),
	assert = require('../assert');


var suite = vows.describe('array');

suite.addBatch({
	"d3_array":{
		topic:load('core/array').expression("d3_array"),
		"this array test":  function (_) {
			assert.strictEqual(_([]).length, 0);
			assert.strictEqual(_([1,2,3]).length, 3);
			assert.strictEqual(_([{},{},{}]).length, 3);
		}
	}
});

suite.export(module);
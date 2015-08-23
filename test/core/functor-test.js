var vows = require('vows'),
	load = require('../load'),
	assert = require('../assert');

var suite = vows.describe("d3.functor");

suite.addBatch({
	"functor": {
		topic: load('core/functor').expression('d3.functor'),
		"when passed a function should return a function": function(functor){
			function foo() {}
			assert.strictEqual(functor(foo), foo);
		},
		"when passed non-functions should return a wrapper function": function(functor){
			var a = {};
			assert.isNull(functor(null)());
			assert.isUndefined(functor(undefined)());
			assert.strictEqual(functor(a)(), a);
			assert.deepEqual(functor([1])(),[1]);
		}
	}
});

suite.export(module);
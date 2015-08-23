var vows = require('vows'),
	load = require('../load'),
	assert = require('../assert');

var suite = vows.describe("d3.rebind");

suite.addBatch({
	"d3.rebind":{
		topic:load("core/rebind").expression("d3.rebind"),
		"should return source context from target":function (rebind) {
			var target = {}, source = {method:function () {
				that = this
			}}, that;
			rebind(target,source,"method");
			assert.strictEqual((target.method(),that),source);
			assert.strictEqual((target.method.call({}),that), source);
		},
		"source function should receive target arguments":function(rebind){
			var target = {}, source = {method:function(){ those = Array.prototype.slice.call(arguments); }}, those;
			rebind(target,source,"method");
			assert.deepEqual((target.method({}),those),[{}]);
			assert.deepEqual((target.method(null),those),[null]);
			assert.deepEqual((target.method(source,source,1),those),[source,source,1]);
		},
		"target function should return target if source function return source":function(rebind){
			var target = {}, source = {method:function(value){ return value ? source : 42; }};
			rebind(target,source,"method");
			assert.strictEqual(target.method(true),target);
		},
		"otherwise target function should return source function return value":function(rebind){
			var target = {}, source = {method:function(value){ return value ? source : 42; }};
			rebind(target,source,"method");
			assert.strictEqual(target.method(false),42);
		}
	}
});

suite.export(module);
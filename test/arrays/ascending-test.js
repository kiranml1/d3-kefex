var vows = require('vows'),
	load = require('../load'),
	assert = require('../assert');

var suite = vows.describe("d3.ascending");

suite.addBatch({
	"d3_ascending":{
		topic: load("arrays/ascending").expression("d3.ascending"),
		"numbers":{
			"return a negative number if a < b": function(ascending) {
				assert.isTrue(ascending(1,0) > 0);
			},
			"returns a positive number if a > b": function(ascending){
				assert.isTrue(ascending(0,1) < 0);
			},
			"returns zero if a === b": function(ascending){
				assert.equal(ascending(0,0),0);
			},
			"returns NaN idf a or b is undefined": function(ascending){
				assert.isNaN(ascending(0,undefined));
				assert.isNaN(ascending(undefined, 0));
				assert.isNaN(ascending(undefined,undefined));
			},
			"returns NaN if a or b is NaN": function(ascending){
				assert.isNaN(ascending(NaN,0));
				assert.isNaN(ascending(0,NaN));
				assert.isNaN(ascending(NaN,NaN));
			}
		},
		"strings":{
			"return a positive number if a > b": function(ascending){
				assert.isTrue(ascending("a","b") < 0);
			},
			"return a negative number if a < b": function(ascending){
				assert.isTrue(ascending("b","a") > 0);
			},
			"returns zero if a === b": function(ascending){
				assert.equal(ascending("a","a"),0);
			}
		}
	}
});

suite.export(module);
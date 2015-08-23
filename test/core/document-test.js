var vows = require("vows"),
    load = require("../load"),
    assert = require("../assert");

var suite = vows.describe("document");

suite.addBatch({
	"d3_documentElement":{
		topic: load("core/document").document().expression("{document:document,window:window,d3_documentElement:d3_documentElement}"),
		"the document element exists":function(_) {
			assert.strictEqual(_.document.documentElement.nodeType, 1);
			assert.strictEqual(_.document.documentElement.nodeName, "HTML");
			assert.strictEqual(_.document.defaultView, _.window);
		},
		"return document for a element":function(_){
			assert.strictEqual(_.d3_documentElement(_.document.body), _.document.documentElement);
		},
		"document should return document":function(_){
			assert.strictEqual(_.d3_documentElement(_.document), _.document.documentElement);
		},
		"window should return document":function(_){
			assert.strictEqual(_.d3_documentElement(_.window), _.document.documentElement);
		},
		"should return undefined": function(_){
			assert.isUndefined(_.d3_documentElement());
		}
	},
	"d3_window":{
		topic: load("core/document").document().expression("{document:document,window:window,d3_window:d3_window}"),
		"the document element exists":function(_) {
			assert.strictEqual(_.document.documentElement.nodeType, 1);
			assert.strictEqual(_.document.documentElement.nodeName, "HTML");
			assert.strictEqual(_.document.defaultView, _.window);
		},
		"return document for a element":function(_){
			assert.strictEqual(_.d3_window(_.document.body), _.window);
		},
		"document should return document":function(_){
			assert.strictEqual(_.d3_window(_.document), _.window);
		},
		"window should return document":function(_){
			assert.strictEqual(_.d3_window(_.window), _.window);
		},
		"should return undefined": function(_){
			assert.isUndefined(_.d3_window());
		}
	}
});

suite.export(module);

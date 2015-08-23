var d3_subclass = {}.__proto__?

function(object,prototype) {
	object.__proto__ = prototype;
}:

function(object,prototype){
	for (var property in prototype) object[property] = prototype[property];
};
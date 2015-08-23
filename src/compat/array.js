import "../core/array";
import "../core/document";

if (d3_document) {
	try {
		d3_array(d3_document.documentElement.childNodes)[0].nodeType;
	} catch (e) {
		d3_array = function(list) {
			var i = list.length, array = new Array(i);
			while(i--) array[i] = list[i];
			return array;	
		};
	}
}
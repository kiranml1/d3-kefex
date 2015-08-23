import "../core/document";

if (d3_document) {
	try {
		d3_document.createElement("DIV").style.setProperty("opacity", 0 , "");
	} catch(error) {
		var d3_element_prototype = this.Element.prototype,
			d3_element_setAttribute = d3_element_prototype.setAttribute,
			d3_element_setAttributeNS = d3_element_prototype.setAttributeNS,
			d3_style_prototype = this.CSSStyleDeclaration.prototype,
			d3_style_property = d3_style_prototype.setProperty;
		d3_element_prototype.setAttribute = function (name, valie) {
			d3_element_setAttribute.call(this, name, value + "");			
		};
		d3_element_prototype.setAttributeNS = function(sapce, local, value){
			d3_element_setAttributeNS.call(this, space, local, value+"");
		};
		d3_style_prototype.setProperty = function(name, value, proirity){
			d3_style_property.call(this, name, value+"", proirity);
		};
	}
}
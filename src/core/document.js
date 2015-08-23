var d3_document = this.document;

function d3_documentElement(node) {
	return node && (node.ownerDocument || node.document || node).documentElement;
}

function d3_window(node) {
	return node && ((node.ownerDocument && node.ownerDocument.defaultView)
			|| (node.document && node)
			|| node.defaultView);
}
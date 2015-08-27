d3.quantile = function(values,p){
	var H = (values.length - 1) * p + 1;
		h = Math.floor(H);
		e = H - h;
		v = +values[h-1];
	return e ? v + e * (values[h] - v) : v;
};
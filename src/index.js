
exports.min = function min (array) {
	return ((array === undefined || array.length === 0) || 
	!Array.isArray(array)) ? 0 :
	Math.min.apply(null, array);
}

exports.max = function max (array) {
	
}

exports.avg = function avg (array) {
	return ((array === undefined || array.length === 0) || 
	!Array.isArray(array)) ? 0 :
	array.reduce((a, b) => a + b, 0) / array.length;
}

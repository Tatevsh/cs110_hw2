const x=7;
const Spaces = function(rows) {
	if (rows === 0) {
		return "";
	}
	return " " + Spaces(rows - 1);
};

const Stars = function(rows) {
	if (rows === 0) {
		return "";
	}
	return "*" + Stars(rows - 1);
};

const triangleStars = function(rows) {
	if (rows === 0) {
		return "";
	}
	return triangleStars(rows - 1) + "\n" + Spaces (x - rows) + Stars(2 * rows - 1);
};

console.log(triangleStars(x));

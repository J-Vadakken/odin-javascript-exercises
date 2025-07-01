const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((tot, val) => tot+val, 0);
};

const multiply = function(arr) {
  return arr.reduce((val, cur_val) => val*cur_val, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let arr = [1];
  let i = 2;
  while (i<=a) {
    arr.push(i);
    i++;
  }
  return arr.reduce((val, i) => val*i, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

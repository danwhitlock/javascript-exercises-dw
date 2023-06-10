const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(...args){
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
 };

const power = function(a,b) {
  let result = Math.pow(a,b);
  return result;	
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  } else if (num < 0) {
    return 'error';
  } else if (num > 0) {
    return (num * (factorial(num -1)));
  }
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

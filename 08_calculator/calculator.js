const add = function(a,b) {
	return a + b ;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let suma = 0;
  a.forEach((e) => {suma+=e})
  return suma;
};

const multiply = function(a) {
  let multi = 1;
  a.forEach((e) => {multi*=e})
  return multi;
};

const power = function(a,b) {
  let power = 1;
  for (let i = 0; i < b; i++) {
    power *= a;
  }
  return power;
};

const factorial = function(a) {
	let factorial=1;
  if(a == 0)return 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
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

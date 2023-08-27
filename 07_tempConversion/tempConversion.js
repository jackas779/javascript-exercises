const convertToCelsius = function(f) {
  f = (f -32) * 5/9;
  return Number(f.toFixed(1)) ;
};

const convertToFahrenheit = function(c) {
  c = (c * 9/5) + 32;
  return Number(c.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

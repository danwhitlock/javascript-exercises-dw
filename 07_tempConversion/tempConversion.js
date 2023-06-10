const convertToCelsius = function(tempF) {
  let fToC = (tempF - 32) * 5/9;
  if (Number.isInteger(fToC)) {
    return fToC;
  } else {
  return Number(fToC.toFixed(1));
  }
};

const convertToFahrenheit = function(tempC) {
  let cToF = (tempC * 9/5) + 32;
  if (Number.isInteger(cToF)) {
    return cToF;
  } else {   
    return Number(cToF.toFixed(1));  // toFixed converts the output to a string, so have to use Number() to turn it back into a number
  }
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

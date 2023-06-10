/*  Leap years are 
  Divisible by four (can use % / remainder to figure out?)
  But if they are also divisible by 100, they are not
  Unless they are also divisible by 400

  Meaning - 

  Divisible by four and not divisible by 100 = true
  Divisible by 100 and 400 = true
  anything else = false



const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 > 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false;
    };
};
*/



// Optimised version - 

const leapYears = function(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
};


console.log(leapYears(1984)); /* should be true */
console.log(leapYears(1800)); /* should be false */
console.log(leapYears(1600)); /* should be true */

// Do not edit below this line
module.exports = leapYears;

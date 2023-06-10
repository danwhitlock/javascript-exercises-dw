const reverseString = function(str) {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
};

// console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;

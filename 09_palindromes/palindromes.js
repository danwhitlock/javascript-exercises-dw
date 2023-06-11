// Take the starting string
// Split it out, reverse it and join it back together
// compare one to the other
// add validation to ensure no special characters etc


const palindromes = function (string) {
    let tidiedString = string.toLowerCase().replace(/[^a-z0-9]/g,'');
        //console.log(tidiedString);
    let reversedString = tidiedString.split('').reverse().join('');
        //console.log(reversedString);
    return reversedString === tidiedString;
};

//console.log(palindromes('radar'));
//console.log(palindromes('RaDaR'));
//console.log(palindromes('cats'));

// Do not edit below this line
module.exports = palindromes;

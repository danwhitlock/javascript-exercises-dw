const repeatString = function(string, num) {
    let resultingString = "";
    if (num < 0) {
        return 'ERROR';
    } 
    for (let i = 0; i < num; i++) {
        resultingString += string;
}
return resultingString;
};



// Do not edit below this line
module.exports = repeatString;

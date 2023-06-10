/*  Potential approach - 

    Take the start and end numbers
    Find out what the numbers in between are (loop from start to end and iterate/+1 each time?)
    Store those numbers or the sum of those numbers
    Add (sum of numbers in between) to (first number + last number)
    Output the result 
    
    Or easier...

    Start at first number
    iterate through to last
    use addition assignment operator
    output result
    
    add conditions for errors

    */

const sumAll = function(firstNum, lastNum) {
    
    let sum = 0;
    
    if (firstNum < 0 || lastNum < 0) {
        return "ERROR";
    }
    
    if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return "ERROR";
    }

    if (firstNum > lastNum) {
        let swap = firstNum;
        firstNum = lastNum;
        lastNum = swap;
    }
    
    for (i = firstNum; i < lastNum +1; i++) {
         sum += i;
    }
    return sum;

};

console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;

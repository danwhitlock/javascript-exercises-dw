// Set up fibonacci sequence?
// return the value at position x?


const fibonacci = function(position) {
    let positionInt = Number(position);
    if (positionInt < 0) {
        return 'OOPS';
    } else if (positionInt <= 1) {
        return positionInt;
    }
    let result = fibonacci(positionInt - 1) + fibonacci(positionInt - 2);
    return Number(result);
};

// Do not edit below this line
module.exports = fibonacci;

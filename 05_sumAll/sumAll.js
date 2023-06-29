const sumAll = function(arg1, arg2) {
let sum = 0;
let holder = 0;
let min = arg1;
let max = arg2;

if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "ERROR"
}
if (arg1 < 0 || arg2 < 0) {
    return "ERROR"
}

if (arg2 < arg1) {
    holder = arg1;
    min = arg2;
    max = holder;
}


while (min !== max+1) {
        sum += min;
        min++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

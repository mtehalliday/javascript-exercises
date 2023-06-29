const removeFromArray = function(array, ...arg) {
    const retArr = [];
    for (const item of array) {
        if (!arg.includes(item)) {
            retArr.push(item);
        }
     }
    return retArr;
};

// Do not edit below this line
module.exports = removeFromArray;

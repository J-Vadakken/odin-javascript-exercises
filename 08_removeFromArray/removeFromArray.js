const removeFromArray = function(...theArgs) {
    let arr = theArgs[0];
    let numArr = theArgs.slice(1);
    return arr.slice().filter(val => !numArr.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(a, b) {
    if (typeof(a) != typeof(1)) return "ERROR";
    if (typeof(b) != typeof(1)) return "ERROR";
    if (a % 1 != 0) return "ERROR";
    if (b % 1 != 0) return "ERROR";
    if (a < 0) return "ERROR";
    if (b < 0) return "ERROR";
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;

    // Alt:
    return (a+b)/2*(b-a+1);

};

// Do not edit below this line
module.exports = sumAll;

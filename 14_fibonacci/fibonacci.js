const fibonacci = function(n) {
    let a = 1;
    let b = 1;
    let c = 2;
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n <= 2) return 1;
    let i = 2;
    while (i<n) {
        c = a + b;
        b = a;
        a = c;
        i++;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;

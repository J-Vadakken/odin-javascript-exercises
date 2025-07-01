const palindromes = function (string) {
    let punctuation = [" ", ",", ".", "!"]
    let str_p = string;
    for (mark of punctuation) {
        str_p = str_p.split(mark).join("");
    }
    console.log(str_p);
    str_p = str_p.toLowerCase();
    let arr = str_p.split("");
    let i = 0;
    while (i < arr.length) {
        if (arr[i] != arr[arr.length-1-i]) return false;
        i++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

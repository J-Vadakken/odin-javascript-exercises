const getTheTitles = function(arr_obj) {
    // return arr_obj.reduce((arr, val) => {
    //     arr.push(val.title);
    //     return arr;
    // },[]);
    return arr_obj.map(val => val.title);
};

// Do not edit below this line
module.exports = getTheTitles;

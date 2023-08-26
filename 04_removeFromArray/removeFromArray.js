const removeFromArray = function(arr,val,val2,val3,val4) {
    const result = arr.filter(
        (arr) => arr !== val && arr != val2 && arr != val3 && arr != val4
    );
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

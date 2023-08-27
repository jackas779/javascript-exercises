const leapYears = function(a) {
    let year =  a.toString().slice(-2);
    if(year  == '00'){
        if(a % 400 == 0)return true 
        else return false
    }
    if(a % 4 == 0)return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;

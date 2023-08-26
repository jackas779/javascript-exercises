const sumAll = function(a,b) {

    if(a > b) a = b + (b=a,0)
    else if( a < 0 || typeof b != 'number' )return 'ERROR';
    let c=0;
    for (a; a <= b; a++) {
        c = c+a;
    }
    return c;
};

// Do not edit below this line
module.exports = sumAll;

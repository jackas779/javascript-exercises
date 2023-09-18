const fibonacci = function(a) {
    let nachi = [0,1];
    if(a<0)return 'OOPS';
    for(let b,c,i = 2 ; i <= a ;i++){
        b = i-1;
        c= i-2;
        nachi[i]=nachi[b]+nachi[c];
    }
    return nachi[a];
};

// Do not edit below this line
module.exports = fibonacci;

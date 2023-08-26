const repeatString = function(a,b) {

    if(b<0){
        return 'ERROR';
    }else if(b==0){
        return "";
    }
    if(a==''){
        return a;
    }
    
    for (let index = 1; index < b; index++) {
        a = a+'hey';        
    }
    return a;
};

// Do not edit below this line
module.exports = repeatString;

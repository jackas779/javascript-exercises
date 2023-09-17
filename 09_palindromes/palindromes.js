const palindromes = function (a) {
    const patron = /[!,.]/g;
    let b= a.replace(patron,'').split(/\s+/).join('').toLowerCase();
    let c =b.split('').reverse().join('').toLowerCase();
    if(b==c)return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;

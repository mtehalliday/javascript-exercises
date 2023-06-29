const palindromes = function (word) {
   word = word.replace(/\W/g, "").toLowerCase().replace(/s/g,"");
   return (word === word.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;

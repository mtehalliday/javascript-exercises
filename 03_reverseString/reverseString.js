const reverseString = function(string) {
   let reverse = "";
   
   const newA = string.split("").reverse().join("");

   return newA;
};

// Do not edit below this line
module.exports = reverseString;

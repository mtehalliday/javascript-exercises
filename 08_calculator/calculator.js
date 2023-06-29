const add = function(a, b) {
   return a + b;	
};

const subtract = function(a, b) {
   return a - b;	
};

const sum = function(array) {
   return array.reduce((total, current) => total + current, 0);
};

const multiply = function(...args) {
   let total = 1;
   for (let i = 0; i < args.length; i++) {
    total *= args[i];
   }
   return total;
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(num) {
  if (num == 0 || num == 1){
    return 1;
  }
  let ans = 1;
  for (let i = num; i > 1; i--) {
    ans *= i;
  }	
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

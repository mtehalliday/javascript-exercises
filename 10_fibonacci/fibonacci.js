const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    if (num == 1 || num == 2) {
        return 1;
    } else {
       prev = 1; 
       prev_two = 1;
       counter = 2;
        while (counter != num) {
          let tmp = prev;
          prev = prev + prev_two;
          prev_two = tmp;
          counter++;
        }
        return prev;
    }

};

// Do not edit below this line
module.exports = fibonacci;

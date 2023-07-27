const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let sum = 0;
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
    }

    return sum;
  }
};

const multiply = function (nums) {
  let multiply = 1;
  for(let i = 0; i < nums.length; i++){
    multiply = multiply * nums[i]
  }

  return multiply
};

const power = function (num, num2) {
  let power = 1;
  for(let i = 1; i <= num2; i++){
  power = num * power
 } 

 return power
};

const factorial = function (num) {
  if(num === 0 || num === 1) return 1
  let factorial = 1;
  for(let i = 1 ; i <= num; i++){
   factorial *= i
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

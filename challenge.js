module.exports = function sum(number) {
  // write your code here
  const total = 0;
  if (number < 1) return total;
  return number + sum(number - 1);
};

// console.log(sum(4));
// console.log(sum(10));

const numbers = [2, 5, 7, 1, 10, 8];
const firstOddNumber = numbers.find(number => number % 2);
console.log(firstOddNumber); // 5
const findFirstNegative = numbers.find(n => n < 0)
console.log(findFirstNegative); // undefined
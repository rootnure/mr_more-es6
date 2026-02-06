const numbers = [2, 5, 7, 1, 10, 8];
const oddNumbers = numbers.filter(number => number % 2);
const evenNumbers = numbers.filter(number => !(number % 2));
console.log(oddNumbers, evenNumbers); // [ 5, 7, 1 ] [ 2, 10, 8 ]
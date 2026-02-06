const numbers = [2, 5, 6, 9, 1, 3];

// using for loop
let total = 0;
for(const number of numbers) {
    total += number;
}
console.log(total); // 26

// Array.reduce()
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum); // 26
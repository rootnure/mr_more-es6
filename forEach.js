const numbers = [2, 5, 7, 1, 10, 8];
numbers.forEach(number => {
    if(number % 2) console.log(`${number} is odd`);
    else console.log(`${number} is even`);
})
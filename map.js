const numbers = [2, 5, 7, 1, 10, 8];

// Normal Way
const doubled = [];
for(const number of numbers) {
    const double = number*2;
    doubled.push(double);
}
console.log(doubled); // [ 4, 10, 14, 2, 20, 16 ]

// Array.map()
const doubleIt = x => x * 2;
const doubled2 = numbers.map(doubleIt);
const doubled3 = numbers.map(x => x * 2);
console.log(doubled2, doubled3); // [ 4, 10, 14, 2, 20, 16 ] [ 4, 10, 14, 2, 20, 16 ]

const names = ['Arif', 'Sabbir', 'Kabir', 'Sahedul', 'Ibrahim'];
const nameLengths = names.map(name => name.length);
console.log(nameLengths); // [ 4, 6, 5, 7, 7 ]

// Multy line
const upperForOddLength = names.map(name => {
    if(name.length % 2) {
        name = name.toUpperCase();
    }
    return name;
})
console.log(upperForOddLength); // [ 'Arif', 'Sabbir', 'KABIR', 'SAHEDUL', 'IBRAHIM' ]
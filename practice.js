/**
 * 1. Given an array of nubmers, create a new array where each number is doubled (use map)
 * 2. From an array of numbers, get only the even numbers. (use filter)
 * 3. From an array of numbers, find the first number that is greater than 50. (use find)
 * 4. Given an array of strings (names), print the name with "Hello, " in front. (use forEach)
 * 5. Given an array of numbers, create a new array of their squares. (use map)
 * 6. From an array of ages, return only the ages that are 18 or above. (use filter)
 * 7. From an array of numbers, find the first nubmer that is divisible by 7. (use find)
 * 8. From an array of words, print the length of each word. (use forEach)
 * 9. Given an array of temperatures in Celsius, create a new array with the values convertes to Fahrenheit. (use map)
 * 10. From an array of products with prices, filter out only the products that cost more than 100. (use filter)
 * 11. From an array of person objects with multiple properties (id, name, age), return only the names from the object.
 * 12. From an array of product objects with multiple properties (id, type, price), return only the products that cost less than 100.
 * 13. From an array of student objects with multiple properties (roll, name, grade), find the first student whose grade is "B".
 * 14. From an array of players objects with multiple properties (name, goals), print each player's name with the number of goals they scored.
 * 15. From array of objects containing id and total property, create a new array containing only the total amounts from the orders.
 * 16. (advanced) From array of courses object with property (title, completed), get only the titles of the course that are completed.
 *  */

const numbers = [46, 50, 49, 64, 51, 70];
// #1
const doubled = numbers.map((number) => number * 2);
// #2
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// #3
const firstGraterFifty = numbers.find((number) => number > 50);
// #4
const names = ["Jamil", "Kamil", "Habil", "Bulbul"];
names.forEach((name) => console.log(`Hello, ${name}`));
// #5
const squares = numbers.map((number) => number * number);
// #6
const ages = [18, 20, 16, 30, 11];
const adults = ages.filter((age) => age >= 18);
// #7
const firstDivisibleBySeven = numbers.find((number) => number % 7 === 0);
// #8
const words = ["Hello", "About", "Go", "Restart"];
words.forEach((word) => console.log(word.length));
// #9
const tempsInC = [21, 19, 31, 26];
const tempsInF = tempsInC.map((tempInC) => (tempInC * 9) / 5 + 32);
// #10
const prices = [105, 92, 192, 87, 200];
const highPrices = prices.filter((price) => price > 100);
// #11
const persons = [
    { id: 1, name: "Khalid", age: 20 },
    { id: 2, name: "Saiful", age: 23 },
    { id: 3, name: "Farhan", age: 16 },
    { id: 4, name: "Saad", age: 28 },
];
const onlyNames = persons.map((person) => person.name);
// #12
const products = [
    { id: 1, type: "Laptop", price: 200 },
    { id: 2, type: "Mobile", price: 87 },
    { id: 3, type: "Monitor", price: 105 },
    { id: 4, type: "Printer", price: 100 },
];
const highPriceProducts = products.filter((product) => product.price > 100);
// #13
const students = [
    { roll: 21, name: "Habib", grade: "A" },
    { roll: 17, name: "Habib", grade: "B" },
    { roll: 12, name: "Habib", grade: "A+" },
    { roll: 27, name: "Habib", grade: "B" },
];
const firstBGrade = students.find((student) => student.grade === "B");
// #14
const players = [
    { name: "Sorwar", goals: 3 },
    { name: "Harshad", goals: 0 },
    { name: "Randhawa", goals: 1 },
];
players.forEach((player) =>
    console.log(`${player.name} scores ${player.goals} goals.`),
);
// #15
const orders = [
    { id: 1, total: 200 },
    { id: 2, total: 305 },
    { id: 3, total: 182 },
    { id: 4, total: 177 },
];
const totals = orders.map((order) => order.total);
// #16
const courses = [
    { id: 1, title: "Complete Web Development", completed: true },
    { id: 2, title: "Next Lelvel Development", completed: false },
    { id: 3, title: "Mission Restart", completed: false },
    { id: 4, title: "Redux by Mir", completed: true },
];
const completedCourseTitles = courses
    .filter((course) => course.completed)
    .map((course) => course.title);

// Outputs
console.log({
    doubled,
    evenNumbers,
    firstGraterFifty,
    squares,
    adults,
    firstDivisibleBySeven,
    tempsInF,
    highPrices,
    onlyNames,
    highPriceProducts,
    firstBGrade,
    totals,
    completedCourseTitles,
});

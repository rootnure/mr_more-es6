# More ES6

## Notation
- Dot Notation
```js
const userCountry = user.country;
```
- Bracket Notation
```js
const userAge = user['age']; // property name as string
const propertyName = 'gender';
const userGender = user[propertyName]; // property name in a variable
const userPresentAddress = user['present-address']; // property name with special character
```
## Chaining
- Normal Chaining
```js
const userCountryCode = user.address.permanent.country.code;
```
- Optional Chaining --> To prevent code break (on any missing property in the middle) and give ```undefined```
```js
const userCountryCode = user?.address?.permanent?.country?.code;
```

## Array Methodes
### Array ```.map()``` Method
- Return array of values after some operation
- Can be Single Line or Multy Line Code
- Must ```return``` for multy line
```js
const numbers = [2, 5, 7, 1, 10, 8];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [ 4, 10, 14, 2, 20, 16 ]
```
### Array ```.forEach()``` Method
- Do some operation inside
- Can be Single Line or Multy Line
- Return ```undefined```
```js
const numbers = [2, 5, 7, 1, 10, 8];
numbers.forEach(number => {
    if(number % 2) console.log(`${number} is odd`);
    else console.log(`${number} is even`);
})
```
### Array ```.filter()``` Method
- Return array of all matching values
- Must be single line
```js
const numbers = [2, 5, 7, 1, 10, 8];
const oddNumbers = numbers.filter(number => number % 2);
console.log(oddNumbers); // [ 5, 7, 1 ]
```
### Array ```.find()``` Method
- Return first matching value
- Must be single line
```js
const numbers = [2, 5, 7, 1, 10, 8];
const firstOddNumber = numbers.find(number => number % 2);
console.log(firstOddNumber); // 5
```

### Array ```.reduce()``` Method
- Return a single output from an array
- Can be Single line or Multy Line
- Return only a single value
```js
const numbers = [2, 5, 6, 9, 1, 3];
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum); // 26
```

## Class
- class is Template of an Object
- has some property/properties
- has some method (a special type of function inside a class without the function keyword)
- use to create same type of object
```js
class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
    }
    goal() {
        console.log('score a goal');
    }
    getTeamName() {
        return 'Borsha'
    }
}
const player1 = new Player();
console.log(player1); // Player { name: undefined, age: undefined, location: 'Bangladesh' }
player1.goal(); // score a goal
console.log(player1.getTeamName()) // Borsha
const player2 = new Player('Raki', 24);
console.log(player2); // Player { name: 'Raki', age: 24, country: 'Bangladesh }
const player3 = new Player('Akki', 12);
console.log(player3); // { name: 'Akki', age: 12, country: Bangladesh }

console.log(player2 instanceof Player); // true
```

## Inheritance
- Inharit property and method frop parents and expands
```js
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}
class Cat extends Animal {
    constructor(name, color, age) {
        super(name, age);
        this.breed = breed;
    }
    meow() {
        console.log(`${this.name} is meowing`);
    }
}
class Bird extends Animal {
    constructor(name, species, age) {
        super(name, age);
        this.breed = breed;
    }
    sing() {
        console.log(`${this.name} is singing`);
    }
}

// -------------------------------------------------

const dog = new Dog('Snif', 'Deshi', 4);
const cat = new Cat('Mini', 'Brown', 2);
const bird = new Bird('Pheib', 'Bideshi', 1);

console.log(dog); // Dog { name: 'Shif', breed: 'Deshi', age: 4 }
console.log(cat); // Cat { name: 'Mini', color: 'Brown', age: 2 }
console.log(dog); // Bird { name: 'Pheib', species: 'Bideshi', age: 1 }
dog.eat(); // Snif is eating
cat.eat(); // Mini is eating
bird.eat(); // Pheib is eating

```

## Encapsulation

## ```this``` in JS
- _**A mysterious thing in programming languages**_
- Define the object that been created using this (```Vehicle```) class
```js
class Vehicle {
    constructor(type) {
        this.type = type;
    }
    getThis() {
        console.log(this);
    }
const car = new Vehicle('Bus');
car1.getThis(); // Vehicle { type: 'Bus' }
```
- Define Current Object
- Arrow function do not have their own ```this```
```js
const student = {
    name: 'Ashiq',
    score: 2000,
    getScore: function() {
        console.log(this); // referes current object for normal function
    },
    getName: () => {
        console.log(this); // arrow function do not have their own this (refer empty object)
    }
}
student.getScore();
student.getName();
```
- Refers to the window object or empty object for ```Node.js```
```js
console.log('Ultimate This: ', this); // referes window object in website ({} --> for Node.js)
```
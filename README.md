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
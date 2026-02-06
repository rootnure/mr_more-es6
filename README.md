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
- ```Array.map()```
```js
const numbers = [2, 5, 7, 1, 10, 8];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [ 4, 10, 14, 2, 20, 16 ]
```
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
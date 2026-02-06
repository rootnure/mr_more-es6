const persons = [
    {id: 1, name: 'Abc', gender: 'female'},
    {id: 2, name: 'bca', gender: 'male'},
    {id: 3, name: 'bac', gender: 'male'},
    {id: 4, name: 'bbc', gender: 'female'},
    {id: 5, name: 'acb', gender: 'male'},
    {id: 6, name: 'cab', gender: 'female'},
];

const namesUpperCase = persons.map(person => person.name.toUpperCase())
console.log(namesUpperCase); // [ 'ABC', 'BCA', 'BAC', 'BBC', 'ACB', 'CAB' ]

const females = persons.filter(person => person.gender === 'female');
console.log(females);
/* [
  { id: 1, name: 'Abc', gender: 'female' },
  { id: 4, name: 'bbc', gender: 'female' },
  { id: 6, name: 'cab', gender: 'female' }
] */

const firstMale = persons.find(person => person.gender === 'male');
console.log(firstMale); // { id: 2, name: 'bca', gender: 'male' }

/**
 * class --> Template
 * 
 * properties
 * method (a special type of function inside a class without the function keyword)
 * 
 * 
 * object
 *  
 * 
 */

class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
        // console.log('calling the constructor', name, age);
    }
    goal() {
        console.log('score a goal');
    }
    getTeamName() {
        return 'Borsha'
    }
}
const player1 = new Player();
// player1.goal();
console.log(player1);
// console.log(player1.getTeamName())
const player2 = new Player('Raki', 24);
console.log(player2);
const player3 = new Player('Akki', 12);
console.log(player3);

console.log(player2 instanceof Player); // true
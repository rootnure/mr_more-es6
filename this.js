class Vehicle {
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;
    }
    getThis() {
        console.log(this); // this --> Define the object that been created using this (Vehicle) class
    }
    getPrice() {
        return this.price;
    }
}

const car1 = new Vehicle('Bus', 'RN8', 20000000);
const car2 = new Vehicle('Private', 'Toyota', 1500000);

// car1.getThis();
// console.log(car1.getPrice());
// console.log(car2.getPrice());

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

console.log('Ultimate This: ', this); // referes window object in website ({} --> for Node.js)
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
        this.color = color;
    }

    meow() {
        console.log(`${this.name} is meowing`);
    }
}

class Bird extends Animal {
    constructor(name, species, age) {
        super(name, age);
        this.species = species;
    }

    sing() {
        console.log(`${this.name} is singing`);
    }
}



const dog1 = new Dog('Tommy', 'Deshi');
dog1.eat();
// console.log(dog1);

const cat1 = new Cat('Mini', 'brown', 2);
cat1.eat();
// console.log(cat1);

const bird1 = new Bird('Pheib', 'Bedishi', 1);
bird1.eat();
// console.log(bird1);


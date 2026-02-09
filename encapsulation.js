class Vehicle {
    #tin;
    constructor(type, brand) {
        this.type = type;
        this.brand = brand;
        this.#tin = '23ASASNNL25IOE';
    }
    getBrand() {
        return this.brand;
    }
    getTin() {
        return this.#tin; // Accessable inside class
    }
}

const car1 = new Vehicle('Bus', 'RN8');

console.log(car1.getBrand());
// console.log(car1.#tin); // Won't let access
console.log(car1.getTin());

"use strict";
class Car {
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
            Car.numberOfCars++;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
}
Car.numberOfCars = 0;
let myCar1 = new Car("Cool car company", "Blue", 2);
// console.log(myCar1.color);
// console.log(myCar1._color);
// let myCar2 = new Car("Galaxy motors", "red", 3)
// let myCar3 = new Car("Galaxy motors", "grey")
// console.log(myCar3.doors);
// console.log(myCar1.accelerate(35));
// console.log(myCar1.brake());
// console.log(myCar1.turn('right'));
console.log(Car.getNumberOfCars());

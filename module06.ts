// interface ProcessIdentity <T, U> {
//     (value: T, message: U) : T;
//     }
    
//     function processIdentity<T, U> (value: T, message: U) : T {
//         console.log(message);
//         return value
//     }
    
//     let processor: ProcessIdentity<number, string> = processIdentity;
//     let returnNumber1 = processor(100, 'Hello!');   // OK
//     // let returnString1 = processor('Hello!', 100);   // Type check error

    // --------------------------------------------------------------------

    // interface ProcessIdentity<T, U> {
    //     value: T;
    //     message: U;
    //     process(): T;
    // }
    
    // class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
    //     value: X;
    //     message: Y;
    //     constructor(val: X, msg: Y) {
    //         this.value = val;
    //         this.message = msg;
    //     }
    //     process() : X {
    //         console.log(this.message);
    //         return this.value
    //     }
    // }
    
    // let processor = new processIdentity<number, string>(100, 'Hello');
    // processor.process();           // Displays 'Hello'
    // processor.value = '100';       // Type check error

    // --------------------------------------------------------------------

    class Car {
        make: string = 'Generic Car';
        doors: number = 4;
    }
    class ElectricCar extends Car {
        make = 'Electric Car';
        doors = 4;
    }
    class Truck extends Car {
        make = 'Truck';
        doors = 2;
    }
    function accelerate<T extends Car> (car: T): T {
        console.log(`All ${car.doors} doors are closed.`);
        console.log(`The ${car.make} is now accelerating!`)
        return car
    }
    
    let myElectricCar = new ElectricCar;
    accelerate<ElectricCar>(myElectricCar);
    let myTruck = new Truck;
    accelerate<Truck>(myTruck);
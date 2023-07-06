"use strict";
// interface ProcessIdentity <T, U> {
//     (value: T, message: U) : T;
//     }
class processIdentity {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor = new processIdentity(100, 'Hello');
processor.process(); // Displays 'Hello'
processor.value = '100'; // Type check error

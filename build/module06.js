"use strict";
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!'); // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

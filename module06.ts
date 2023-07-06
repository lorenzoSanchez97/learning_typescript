interface ProcessIdentity <T, U> {
    (value: T, message: U) : T;
    }
    
    function processIdentity<T, U> (value: T, message: U) : T {
        console.log(message);
        return value
    }
    
    let processor: ProcessIdentity<number, string> = processIdentity;
    let returnNumber1 = processor(100, 'Hello!');   // OK
    // let returnString1 = processor('Hello!', 100);   // Type check error
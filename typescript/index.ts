// 1. string
let myString: string = "Hello, TypeScript!";
console.log("String:", myString);

// 2. number
let myNumber: number = 42;
console.log("Number:", myNumber);

// 3. boolean
let myBoolean: boolean = true;
console.log("Boolean:", myBoolean);

// 4. null
let myNull: null = null;
console.log("Null:", myNull);

// 5. any
let myAny: any = "This can be anything";
console.log("Any string:", myAny);

myAny = 10;
console.log("changed to number:", myAny);

myAny = false;
console.log("changed to boolean:", myAny);
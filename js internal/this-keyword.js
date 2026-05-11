//"This" keyword is a very important concept to understand for any JavaScript Interview. 'this' keyword behaves differently in different contexts, so it is important to understand those contexts & how to know "this" value in each context.

/* 5 Ultimate Rules to master 'this' keyword
Here are 5 examples that cover all different behaviour of the this keyword in JavaScript:
 */

//Rule 1: Global Context:

var name = "Random";
let car = "BMW";
const city = "jaipur";
console.log(this === window); // true
console.log(window.name); // Random

console.log(this.name, this.car, this.city);
// Random undefined undefined

console.log(this.name, car, city);
// Random BMW jaipur

/* 
Rule 2: Function Context
Inside a function, the value of this depends on how the function is called. Let's go through the 2 cases to understand this rule.

Case 1: If the function is called as a method of an object, this refers to the object.

Case 2: In case function is called in global object, this refers to the global object. */

let obj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Case 1: How function called - with object context
obj.greet(); // "Hello, my name is Alice"

// Case 2: How function called - with window context, like window.globalFunc
const globalFunc = obj.greet;

/* 
 globalFunc invokes greet() in global context and as described in step 1, 
 "this" maps to windows in global context,
 Code tries to find the name in global context, but doesn't find so return undefined.
*/
globalFunc(); // "Hello, my name is"

/* Rule 3: Constructor Context
When a function is used as a constructor (i.e., called with the new keyword), this refers to the newly created object. */

function Person(name) {
  this.name = name;
}

const person1 = new Person("Alice"); // { name: "Alice" }
console.log(person1.name); // "Alice"

/* 
Rule 4: Explicit Binding using call, apply or bind
The value of this can be explicitly set using the call, apply, or bind methods. */

function greet() {
  console.log(`Hello, my name is ${this.name}.`);
}

let alice = { name: "Alice" };
greet(alice); // "Hello, my name is undefined." (because greet is called without an object context)

greet.call(alice); // "Hello, my name is Alice." (using call to set this to alice)
greet.apply(alice); // "Hello, my name is Alice." (using apply to set this to alice)
const boundGreet = greet.bind(alice);
boundGreet(); // "Hello, my name is Alice." (using bind to create a new function with this set to alice)

/* Rule 5: Arrow Functions
Arrow functions do not have their own "this" value. Instead, they inherit this from the enclosing lexical scope means parent lexical scope.  */

let obj = {
  name: "Alice",
  greet: () => {
    console.log("Hello, my name is", this.name);
  },
};
obj.greet(); // "Hello, my name is undefined."
/*
In this example, the arrow function does not have its own this value, so it inherits this from the global scope. Since there is no name property in the global scope, it returns undefined.
*/

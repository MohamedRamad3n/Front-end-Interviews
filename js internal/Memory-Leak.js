// The Reasons for Memory Leaks in JavaScript:
// 1. Global Variables: When variables are declared in the global scope, they remain in memory for the entire duration of the application, even if they are no longer needed.

var global = "I am global";

function scopedFunction() {
  // Global scoped explicitly, without identifier
  scoped = "I am scoped";
  let inner = "inner";
  console.log("variables - ", scoped, inner);
}
scopedFunction();
// Avoid creating variables without identifiers (let, const, var) and It's essential to have plugins or linters (like ESLint) as part of the project setup to catch this type of memory leak issue.

// 2. Not Removing Event Listeners: If event listeners are not removed when they are no longer needed, they can cause memory leaks by keeping references to DOM elements or other objects.

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// To prevent this, you should remove event listeners when they are no longer needed:
button.removeEventListener("click", () => {
  console.log("Button clicked!");
});

// 3.Mindful of Closures: Closures can lead to memory leaks if they hold references to variables that are no longer needed. If a closure retains a reference to an object, that object will not be garbage collected.
function closuresExample() {
  const bigArr = new Array(1000).fill(5);

  return () => {
    console.log(bigArr);
  };
}

// printBigArr carry bigArr reference as part of the closure
// This closure reference won't allow the garbage collector to remove the reference of closureExample

const printBigArr = closuresExample();
printBigArr();

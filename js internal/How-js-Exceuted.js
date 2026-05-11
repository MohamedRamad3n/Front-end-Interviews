var n = 2;

function printValue(num) {
  var ans = num * num;
  return ans;
}

var result = printValue(n);
var result2 = printValue(5);

// In this code snippet, the JavaScript engine will execute the code in the following order:

// 1. The variable `n` is declared and assigned the value `2`.
// 2. The function `printValue` is defined, which takes a parameter `num`, calculates its square, and returns the result.
// 3. The function `printValue` is called with the argument `n` (which is `2`), and the result is stored in the variable `result`. The calculation performed is `2 * 2`, resulting in `4`.
// 4. The function `printValue` is called again with the argument `5`, and the result is stored in the variable `result2`. The calculation performed is `5 * 5`, resulting in `25`.

//Execution Contexts and Call Stack:
// When the JavaScript engine executes the code, it creates an execution context for each function call. The execution context contains information about the variables, functions, and the current state of the program. The call stack is a data structure that keeps track of the execution contexts in a last-in-first-out (LIFO) manner.
// In this example, when `printValue(n)` is called, a new execution context is created for the `printValue` function. This context is pushed onto the call stack. Once the function completes its execution and returns a value, the execution context is popped off the call stack, and the program continues with the next line of code. The same process happens when `printValue(5)` is called.
// Overall, the JavaScript engine executes the code sequentially, creating and managing execution contexts for function calls, and using the call stack to keep track of the execution flow.

console.log(result); // Output: 4
console.log(result2); // Output: 25

//Order of Execution in JavaScript:
// JavaScript executes code in a single-threaded manner, meaning it can only execute one piece of code at a time. The order of execution is determined by the structure of the code and the presence of asynchronous operations (like setTimeout, promises, etc.). In the example above, the code is executed sequentially, with each line being executed one after the other. However, if there were asynchronous operations involved, the order of execution could be different due to the event loop and callback queue.
//1)call stack
//2)execution context stack
//3)Program stack
//4)Control stack
//5)Runtime stack
//6)Machine stack

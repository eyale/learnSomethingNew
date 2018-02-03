// closure in functional programming

// add function with clousure
function add(parentArg) {
  return function(childArg) {
      return parentArg + childArg;
  }
}
console.log(add(3)(4))

function log(type) {
  return function (message) {
    console.log(`${type}: ${message}`);
  }
}

let logErr = log('Error');
let logInf = log('INFO');

console.log(logErr('Unexpected token'));
console.log(logInf('please enter correct value'));


// ___________________________________________________________
// add function for task
function add1 (value) {
  return value + value;
}

function multiply (value) {
  return value * value
}

function twice (fn) {
  return function(value) {
    console.log(fn(value, value));
  }
}

const double = twice(add1)
double(11);

const square = twice(multiply);
square(11)

// ___________________________________________________________
function subtract (x,y) {
    console.log(x - y);
}
function reverse(fn) {
  return function (...args) {
    fn(...args.reverse())
  }
}

const subtractReversed = reverse(subtract)

subtract(3,4);
subtractReversed(3,4);
// ___________________________________________________________

function addC (a,b) {
    console.log(a + b)
}

function curry(fn) {
  return function(a) {
     return function(b) {
      return fn(a,b)
    }
  }
}

const addCurry = curry(addC);

addCurry(3)(4) //7

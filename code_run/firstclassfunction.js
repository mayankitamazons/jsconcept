// first class function 
// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  // Passing a function as an argument to another function
  function sayHello(greetingFunction, name) {
    const message = greetingFunction(name);
    console.log(message);
  }
  
  sayHello(greet, 'John'); // Output: Hello, John!
  
  // Returning a function from another function
  function createMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = createMultiplier(2);
  console.log(double(5)); // Output: 10
  
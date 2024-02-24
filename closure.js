// console.log("closure Example");
function x() {
  var a = 5;
  function y() {
    console.log(a);
  }
  a = 20;
  y();
}
x();

// create a program to print 1,2,3,4,5 after 1,2,3,4,5 sec
console.log("closure Example 2");
function print() {
  console.log("print value after defined time");
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i, "more  sec passed");
    }, i * 1000);
  }
}
print();

// write same program with var keyword and using closure

// function print2() {
//   console.log("print value after defined time");
//   for (var i = 1; i <= 5; i++) {
//     function timer(i) {
//       setTimeout(() => {
//         console.log(i, "more  sec passed");
//       }, i * 1000);
//     }
//     timer(i);
//   }
// }
// print2();
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// console.log(x);
// let x = 2;
// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// counter(); // Outputs: 1
// counter(); // Outputs: 2

function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
// number(); // 2

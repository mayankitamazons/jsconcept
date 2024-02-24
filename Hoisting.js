// console.log(x);
// var x=7;
// console.log(x);
// test();
// // test3();
// test2();
// function test(){
//     console.log('test function test');
// }

// // arrow function 
// var test2=function(){
//     console.log('I am variable function');
// }
// var test3=()=>{
//     console.log('more way to write arrow function');
// }
// // console.log(z);
// // if define variable with let,const its create "temporal dead zone"
// let z=4;
// // console.log(z);
// console.log(test);
// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// // }
// var x=5;
// // lexical scope 
// var a=()=>{
//     var x;
//     x=6;
//     var y=5;
//     console.log(`value of x is ${x}`);
 
// }
// a();  
// console.log(`value of x is ${x}`);
// console.log(`value of x is ${y}`);

// more complex question
var x=1;
a();

function a(){
    var x=10;
    console.log(`x inside 1st function ${x}`);
}
var b=()=>{
    var x=100;
    console.log(`x inside 2nd function ${x}`);
}
b();
console.log(x);
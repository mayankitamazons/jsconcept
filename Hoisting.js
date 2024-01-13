console.log(x);
var x=7;
console.log(x);
test();
// test2();
function test(){
    console.log('test function test');
}
// arrow function 
var test2=function(){
    console.log('I am variable function');
}
var test3=()=>{
    console.log('more way to write arrow function');
}
// console.log(z);
// if define variable with let,const its create "temporal dead zone"
let z=4;
// console.log(z);
console.log(test);
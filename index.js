// javascript hoisting
// firstprogram();
// console.log(x);

// var x = 7;
function firstprogram() {
  console.log("Hello Java");
}
var func2 = () => {
  console.log("arrow function called ");
};


const func3=()=>{
   console.log('Function 3');
};

// func2();
// functions
// console.log(y);
// console.log("x value before intization called Hoisting", x);
// var x = 1;
// a();
// b();
// function a() {
//   var x = 5;
//   console.log("x value in a function", x);
// }

// function b() {
//   var x = 7;
//   console.log("x value in b function", x);
// }
// console.log("x value outside", x);

// let z = 5;
// let z = 6;
// const pie;
// console.log("z value", z);



function result1(){
  console.log('normal function defined');
}

const result2=function (){
  console.log('normal function in form of variable declaration ');
}
const result3=()=>{
  console.log('arrow function called ');
}

// const multiply=(a,b)=> a*b;
// result1();
// result2();
// result3();
// console.log(multiply(2,3));

const person={
  fname:"Mayank",
  lname:"sharma",
  printname:function(){
    console.log(`My Name is ${this.fname} ${this.lname}`);
  }
}
// with settimeout 
const person2={
  fname:"Mayank",
  lname:"sharma",
  printname2:function(){
      // setTimeout(() => {
        
      // }, timeout);
     setTimeout(()=>{
      console.log(`My Name is ${this.fname} ${this.lname}`);
     },2000)
    
  }
}

// person2.printname2();


const x=[1,2,[8,5,4,[2,3,1],3,4]];
const y=[3,4];
// const z=[...x,...y];
// console.log(...x);


// use of back trick 
var res=x.flat().join(' ');
// console.log('res of function',res);
// console.log('example of flat ',x.flat().join(' '));


const xn = [1, 2, [8, 5, 4, [2, 3, 1], 3, 4]];

const flattenedArray = xn.flat(Infinity);
// const flattenedOneLiner = flattenedArray.join(' ');
// console.log(flattenedArray);


let n1={
  fname:"mayank",
  lname:"sharma"
}
n2=n1;
n2.fname="ashish";
console.log('updated n2 ',n2);
console.log('updated n1 ',n1);
// in this above example whenever change value of n2 its also make impact on n1 too 
// to overcome that we can use ... operator  or create new object 
let n3={...n1};

let n4=Object.assign({},n1);
let n5=JSON.parse(JSON.stringify(n1));
n3.fname="Ashish";
n5.fname="Raj";
// console.log('updated n3 ',n3);
// console.log('updated n1 ',n1);
// console.log('updated n5 ',n5);


let s1 = "smayankisgoodmayank";
let s2 = "mayank";
console.log(s1.indexOf(s2));
if (s1.indexOf(s2) !== -1) {
  console.log("s2 exists in s1");
} else {
  console.log("s2 does not exist in s1");
}


// const matchresult=s2.test(s1);
const pattern = /mayank/;
const str = "mayankisbestmayank2";
const result = pattern.test(str);
console.log(result);

console.log('match sub string with test',result);


// let counter = 0;

// console.log(counter++);    // Output: 0
// console.log(counter);      // Output: 1

// counter = 0;                // Reset counter to 0

// console.log(++counter);    // Output: 1
// console.log(counter);      // Output: 1

// counter = 0;                // Reset counter to 0

// console.log(counter + 1);  // Output: 1
// console.log(counter);      // Output: 0 (counter remains unchanged)


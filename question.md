
javascript some basic question 
1) what is  javascript and how its work
2) explain what is execuation  content and how its work 
3) javascript is synchronus single theread lanuage explain how ??
4) explain working flow of javascript 
5) hoisting in javascript
6) what is temporal dead zone for let 
6) explain var, let & const 
7) explain lexical scope 
8) what is callback & explain CallBackHell
9) what is this & window in JS
10) what is shortest program is js 
11) undefied v/s not defined 
--  console.log(a); -- undefined 
    var a=7;
    console.log(x);  -- not defined 
12) Javasciprt is loosly typed lanaguage (weekly type lanaguage) , what it means 
  --   var a;
       console.log(a);
       a=10;
       console.log(a);
       a="Hello";
       console.log(a);
13) what is scope chain  
14) what is closure , pro and cons of that 
  - function a(){
    let x=2;
    console.log(b);
    function inside(){
        console.log(x);
    }
    inside();
  }
  var b=5;
  a();
  pros - Encapsulation , data privacy, Function Factory ,Callback functions , used in function currying , used in high order function 
  memo,
   -- function counter(){
    var count=0;  // count variable is hidden inside function 
     return function increment(){
      count++;
      console.log(count);
     }
   }
   var count1=counter();
  cons : memory consumption , complexity and readablity ,performace overhead,potentail for bugs
15)  let & cons beahaviour in case of hoisting 
16) what is difference b/w syntaxError vs ReferenceError Vs TypeError
   - console.log(x);
   let x=5;  /// Reference Error

   let y=7;
   let y=8; // Syntax Error

   
17) event exection flow 
    Normal Code on main therad 
    - expriry Timer Callbacks (setTimeout, SetInterval,Fetch) exposed from browser window object web api 
     For that function will be crearted on task Queue/ CallBack Queue with help of event  loop  
    - IO pooling Task -> Fs 
    - SetImmediate CallBacks
    - Close CallBacks (sever close , socket Close)
    - Pending Task?NO:EXit:Event Loop 

    Promise CallBack ->Whenever Event Loop Phase Trascations 
18) what is javascript starvation / CallBack Starvation ,"JavaScript thread blocking" or "render-blocking JavaScript,"
- It happens because in the microtask queue if one executes and creates another callback function it continuously happens and the microtask queue is not free. due to its higher priority, it’s run again and again whenever the call stack is free and there is no chance of the callback queue to run. due to this callback queue going into starvation.

 19) what is scope (Global,Block , Script) & shadowing and illegal Shadowing 
 -- var a=10;
    {
      var a=100;  // shadowing 
      console.log(a);
    }

    let a=20;
    {
      var a=20;   // illegal shadowing 
    }
20) Function Currying 
Function currying is a technique in JavaScript where you transform a function with multiple arguments into a sequence of functions, each taking a single argument. It enables partial application of arguments, creating new functions that are more specialized and reusable.

   -- function createMultipler(factor){
        return function(number){
          return number*factor;
        }
   }
   const double=createMultipler(2);
   const two=double(3);
21) whats output of that 
function x(){
  for(var i=1;i<=5;i++){   // if use let  or closure 
   setTimeout(() => {
    console.log(i);
   ),i*1000}
  }

}
x();

output - 6 6  6 6 6 6 // 
can correct via eiter let or closure 
 for(let i=1;i<=5;i++){   // if use let  or closure 
   setTimeout(() => {
    console.log(i);
   ),i*1000}
  }
}

 for(let i=1;i<=5;i++){   // if use let  or closure 
   functio  closure(){
       setTimeout(() => {
    console.log(i);
   ),i*1000}
   }
   closure();
  }
}

22) what is Counstructor function ?
23) explain garbe collection with closure 
24) Function statement , function expression , function delcaration 
  // function statement 
  function a(){

  }
  // function expression & also its annoymous function 
  var b=function(){
    console.log('b called');
  }
25) Annoymous function & First Class Function , high order function ,
iife ,arrow function 
// annoymous function 
function (){

} 

A first-class function is a concept in programming languages where functions are treated as first-class citizens. This means that functions can be treated like any other value: they can be assigned to variables, passed as arguments to other functions, returned from other functions, and stored in data structures
26) Explain Event Loop and how its works





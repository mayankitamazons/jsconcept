
javascript some basic question 
1) what is  javascript and how its work
2) explain what is execuation  content and how its work 
3) javascript is synchronus single theread lanuage explain how ??
4) explain working flow of javascript 
5) hoisting in javascript
6) what is temporal dead zone for let 
6) explain var, let & const 
7) explain lexical scope 
8) what is callback
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
  pros - Encapsulation , data privacy, Function Factory ,Callback functions 
  cons : memory consumption , complexity and readablity ,performace overhead,potentail for bugs
15)  let & cons beahaviour in case of hoisting 
16) what is difference b/w syntaxError vs ReferenceError Vs TypeError
17) event exection flow 
    Normal Code on main therad 
    - expriry Timer Callbacks (setTimeout, SetInterval,Fetch) exposed from browser window object web api 
     For that function will be crearted on task Queue/ CallBack Queue with help of event  loop  
    - IO pooling Task -> Fs 
    - SetImmediate CallBacks
    - Close CallBacks (sever close , socket Close)
    - Pending Task?NO:EXit:Event Loop 

    Promise CallBack ->Whenever Event Loop Phase Trascations 
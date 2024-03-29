// Immediately Invoked Function Expression
// in that case hoisting will not work
var variable =10;
(()=>{
    console.log('1 st',variable);
    
    console.log('2 nd ',variable);
    variable=20;
})(); 
console.log('3 rd',variable);
var variable=30;

// output 10 10  20

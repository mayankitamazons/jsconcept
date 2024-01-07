console.log('explaintion of call,apply & bind');
let userdetail={
    name:"Mayank",
    lname:"Sharma",
    printName:function(){
        console.log(`My Name is ${this.name + " "+this.lname } `);
    }
}
// userdetail.printName();
// call function bro


// global function 
const displayName=function (){
    console.log(`My Name is ${this.name + " "+this.lname } `);
}
let userdetail2={
    name:"Raj",
    lname:"Sharma",
   
}
// userdetail.printName.apply(userdetail2);

displayName.call(userdetail2);
// both call and apply both are same , in apply additional argument are passed with array where as in call with 
// normal , separted value   
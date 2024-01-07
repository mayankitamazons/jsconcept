console.log('explaination of call , apply & bind method');
let name={
    firstname:"Mayank",
    lastname:"upadhyay",
    printName:function(){
        console.log("My Name is "+this.firstname+" "+this.lastname);
    }
}

// name.printName();
let name2={
    firstname:"Raj",
    lastname:"Sharma",
   
}
// function borrowing 
    // name.printName.call(name2);
    name.printName.apply(name2);

// different way to call with apply or call
function displayName(livein){
    console.log("My Name is "+this.firstname+" "+this.lastname+" Live in "+livein);
}
//displayName.call(name2,'Jaipur');
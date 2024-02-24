const fs=require('fs');

setTimeout(() => {
    console.log('Hello From Timer 1');
}, 0);  

setImmediate(()=>{
    console.log('Hello From Immediate Function 1');
})


fs.readFile('f1.txt','utf-8',()=>{
    console.log('IO Polling Finish');

    setTimeout(() => {
        console.log('Hello From timer 2 inside fs');
    }, 0);

    setTimeout(() => { 
        console.log('Hello From timer 3 inside fs');
    }, 5*1000);

    setImmediate(()=>{
        console.log('Hello From Immediate Function 2');
    })
})

console.log('Hello From Top Level Code');
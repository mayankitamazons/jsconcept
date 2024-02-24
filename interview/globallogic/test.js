setImmediate(()=> console.log('setImmediate'));
console.log('start');
process.nextTick(()=> console.log('nextTick'));
setTimeout(()=>console.log('setTimeout  '), 0);
setTimeout(()=>console.log('setTimeout 2'), 3);

new Promise((resolve, reject)=> {
  console.log('start promise 1');
  resolve('Promise 1');
}).then(data=> {
  console.log("Then Block");
})
Promise.reject(() => {}).catch(() => {
    console.log('rejected promise');
  });
console.log('end');  



// output 
// start
// end
// 'start promise 1
// Then Block
// nextTick
// setTimeout 1
// setTimeout 2
// setImmediate

// timer phase v/s poll phase 

// async function async1() {
//     console.log('async1 start');
//    var res= await async2().than(=>{
//     // async1 end
//    });  // 2 sec 
//    if(res)
//     console.log('async1 end');
// }
// async1 start
// async1 end
// async2


// async function async2(a,b){

//     return a+b;
// }

// promise.all & promise.allsettl
// middleware types

// var auth=require('auth');
// next()
// indexe.js

// app.post('/*auth',auth,api.js)
// /api1.js
// /api2.js

// app.use
// app.post('/public',(req,res){

// })


// var app=XPathExpression



// app.use()

// auth & authri
//oaut1, oauth2 () 

//referesh token 
// version control in s3 
// mongodb vs mysql 
//sharding in mongodb
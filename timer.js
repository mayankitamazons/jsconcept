// console.log('a');

// setTimeout(() => {
//      console.log('b');
// }, 2000);
// setTimeout(() => {
//     console.log('b 2');
// }, 0);
//  function b(){
//     console.log('c');
//  }

//  const myPromise=new Promise((resolve,reject)=>{
//        console.log('inside promise');
//        resolve('Promise Task Complete');
//  });

//  myPromise
//  .then(result=>{
//     console.log('Promise Solved',result);
//  }).catch(err=>{
//     console.log('Error on Promise');
//  });
//  myPromise
//  .then(result=>{
//     setTimeout(() => {
//         console.log('Promise Solved inside settimeout',result);
//     }, 4000);
   
//  }).catch(err=>{
//     console.log('Error on Promise');
//  });

//  b();

//  console.log('d');

console.log('with promise');
setTimeout(() => {
    console.log('inside timer');
}, 0);
Promise.resolve('hi').then(()=>console.log('inside promise'));

console.log('b');

// output with promise    b inside promise inside timer 
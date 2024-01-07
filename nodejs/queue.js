// normal console.log , settimeout , setinterval , setimmediate, process.nexttick()
function add(a,b){
    return a+b;
}

console.log('explaninon of different flow');
setTimeout(() => {
    console.log('set timeout with 0 sec ');
}, 0);

setTimeout(() => {
    console.log('settimeout with 10 sec');
}, 10);
console.log('mid of call');


setImmediate(()=>{
    console.log('setimeediate called');
})

process.nextTick(()=>{
    console.log('next tick function called');
})
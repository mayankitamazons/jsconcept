// console.log('scope of function');
// let a=10;
// function outer(){
//     var b=20;
//     function inner(){
//       var c=30;
//       console.log(a,b,c);
//     }
//     inner();
// }
// outer();

console.log('Closure');
function outer(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    inner();
}
outer();
outer();

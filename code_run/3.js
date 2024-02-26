// let x=4;
// {
//     let x=6;
//     console.log(x);
// }
// console.log(x);

function x(){
    var i=1;
    for(var i=1;i<=5;i++)
    {
        function timer(i){
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }
        timer(i);
       
    }
   
    console.log("Js test");
}
x();
// exection of code 
/* 
 Normal Code on main therad 
    - expriry Timer Callbacks (setTimeout, SetInterval,Fetch) exposed from browser window object web api 
     For that function will be crearted on task Queue/ CallBack Queue with help of event  loop  
    - IO pooling Task -> Fs 
    - SetImmediate CallBacks
    - Close CallBacks (sever close , socket Close)
    - Pending Task?NO:EXit:Event Loop 

    Promise CallBack / Async await ->Whenever Event Loop Phase Trascations (Micro Task queue)
   

    Node Code
    Micro Task queue (Promise /Mutation Observers)
    Task Queue  (setTimeout, setInterval, fetch)

*/


async function getData(){
    console.log('getting data');
}
function a(){
    console.log("A");
}
setTimeout(() => {
    console.log("B");
}, 0);

a();
console.log("C");

getData().then(()=>console.log("I got data"))
// Promise.resolve.then(()=>console.log("D"));

setTimeout(() => {
    console.log('Timer Based');
}, 5*1000);



// Make a GET request using the Fetch API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     // Check if the response status is OK (200)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     // Parse the JSON response
//     return response.json();
//   })
//   .then(data => {
//     // Handle the JSON data
//     console.log('Response data:', data);
//     // Example: Displaying the title from the response
//     console.log('Title:', data.title);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the fetch operation
//     console.error('Fetch Error:', error);
//   });

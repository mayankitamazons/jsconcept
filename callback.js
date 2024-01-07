function main(name, callback) {
  console.log("main function called");
  callback(name);
}

function displayname(name) {
  console.log("My Name is ", name);
}

// // main("Mayank", displayname);
// mainwithsettimeout("Mayank", displayname);

// // callback with settimeout

// function mainwithsettimeout(name, callback) {
//   console.log("main function called");
//   setTimeout(() => {
//     callback(name);
//   }, 2000);
// }

// Select the element with the attached event listener

// window.addEventListener("DOMContentLoaded", (event) => {
//   let count = 0;
//   document.getElementById("clickme").addEventListener("click", function xyz() {
//     console.log("Button Clicked", ++count);
//   });
// });

// event loop
// console.log("Start");

// setTimeout(function () {
//   console.log("Async task 1");
// }, 2000);

// setTimeout(function () {
//   console.log("Async task 2");
// }, 1000);

// fetch("https://dummyjson.com/products/1")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("Fetched data:", data);
//   })
//   .catch(function (error) {
//     console.log("Error:", error);
//   });

// console.log("End");

// creating trust issue with setTimeout
console.log("start");
setTimeout(() => {
  console.log("set timeout callback");
}, 5000);
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("After While Loop");

// normal call back
function main(message, callback) {
  console.log("before call back function");
  callback(message);
}
function displayname(message) {
  console.log(`My name is ${message}`);
}

// main("Mayank", displayname);

function asyncOperation1(callback) {
  setTimeout(function () {
    console.log("Async Operation 1");
    callback("Result 1");
  }, 1000);
}

function asyncOperation2(callback) {
  setTimeout(function () {
    console.log("Async Operation 2");
    callback("Result 2");
  }, 1500);
}

function asyncOperation3(callback) {
  setTimeout(function () {
    console.log("Async Operation 3");
    callback("Result 3");
  }, 2000);
}

// Callback Hell
// asyncOperation1(function (result) {
//   console.log("async result 1", result);
//   asyncOperation2(function (result) {
//     console.log("async result 2", result);
//   });
// });

// refector code via promise or async await
function async1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async Operation 1");
      resolve("Result 1");
    }, 1000);
  });
}
function async2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Async Operation 2");
      resolve("Result 2");
    }, 1500);
  });
}
function async3() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Async Operation 3");
      resolve("Result 3");
    }, 1500);
  });
}

async1()
  .then(function (result) {
    console.log("Async Operation 1 called");
    return async2();
  })
  .then(function (result) {
    console.log("Async Operation 2 called");
    return async3();
  })
  .then(function (result) {
    console.log("Async Operation 3 called");
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

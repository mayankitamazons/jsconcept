console.log('Script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('Promise 1');
}).then(function() {
  console.log('Promise 2');
});

console.log('Script end');

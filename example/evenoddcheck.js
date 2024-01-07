// write program to find all even no to new array in js with using all type of loops
const arr = [-1, 2, 3, 4, 5, 6];
let output = [];
const evenNumbers = arr
  .map(function (element) {
    if (element % 2 === 0) {
      return element;
    } else {
      return undefined;
    }
  })
  .filter(function (element) {
    return element !== undefined;
  });
console.log("with map ", evenNumbers);

// return all even no
// with for loop
output = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    output.push(arr[i]);
  }
}
console.log("even array with for loop", output);
// with for in match with key
output = [];
for (let index in arr) {
  if (arr[index] % 2 === 0) {
    output.push(arr[index]);
  }
}
// with for of its loop value with direct element
output = [];
for (let item of arr) {
  if (item % 2 === 0) {
    output.push(item);
  }
}
console.log("even array with for of loop", output);
const evenno = arr.filter(function (num) {
  return num % 2 === 0;
});
console.log("even array with filter", evenno);

// with while loop
// output = [];
// let j = 0;
// while (j < arr.length) {
//   if (arr[j] % 2 === 0) {
//     output.push(arr[j]);
//   }
//   j++;
// }
// console.log("even array with while  loop", output);

// reduce function
// write function to find maximum no from array
const maxnumber = arr.reduce(function (ac, cvalue) {
  return Math.max(ac, cvalue);
});
console.log("maxnumber", maxnumber);

// sum
const sumofall = arr.reduce(function (ac, cvalue) {
  return ac + cvalue;
}, 0);
console.log("sumofall", sumofall);

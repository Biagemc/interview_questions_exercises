// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// input => ([10, 15, 3, 7], k)

// output => true of false if the sum of two items equals to k

// function sumOfTwo(array, k) {
//   let isAMatch = false;
//   array.forEach((element) => {
//     for (let i = 0; i < array.length; i++) {
//       let sum = element + array[i];
//       if (sum === k && element !== array[i]) {
//         isAMatch = true;
//       }
//     }
//   });

//   return isAMatch;
// }

// console.log(sumOfTwo([10, 15, 3, 7], 18));

// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// function product(a, b) {
//   return a * b;
// }
// function productSum(array) {
//   let newArray = [];
//   let totalProduct = array.reduce(product, 1);
//   let newValue;
//   array.forEach((value) => {
//     newValue = totalProduct / value;
//     newArray.push(newValue);
//   });
//   return newArray;
// }
// console.log(productSum([3, 2, 1]));

// or;

// function product(a, b) {
//   return a * b;
// }
// function productSum(array) {
//   let newArray = [];
//   array.forEach((value) => {
//     let filteredArray = array.filter((element) => value !== element);
//     newArray.push(filteredArray.reduce(product, 1));
//   });
//   return newArray;
// }
// console.log(productSum([1, 2, 3, 4, 5]));

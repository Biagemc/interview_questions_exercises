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

//

// let product = (a, b) =>  a * b;

// function productSum(array) {
//   let newArray = [];
//   array.forEach((value) => {
//     let filteredArray = array.filter((element) => value !== element);
//     newArray.push(filteredArray.reduce(product, 1));
//   });
//   return newArray;
// }
// console.log(productSum([1, 2, 3, 4, 5]));

// shorter version

// let product = (a, b) => a * b;
// let productSum = (arr) => arr.map(x => arr.filter(y => x !== y ).reduce(product, 1));

// This problem was asked by IBM.

// Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

// For example, given "aaabbc", you could return "ababac". Given "aaab", return None

function repeatedChar(string) {
  let stringSplitted = string.split("");
  let newString = "";
  stringSplitted.forEach((letter) => {});
  console.log(stringSplitted);
}

// console.log(repeatedChar("aaabbc"));

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.
// function missingInteger(array) {
//   let filteredArray = array.sort().filter((number) => number > 0);
//   for (let i = 0; i < filteredArray.length; i++) {
//     if (filteredArray[i] + 1 !== filteredArray[i + 1]) {
//       let missingValue = filteredArray[i] + 1;
//       return missingValue;
//       break;
//     }
//   }
// }
// console.log(missingInteger([3, 4, -1, 1]));

// This problem was asked by Microsoft.

// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

// Recall that the median of an even-numbered list is the average of the two middle numbers.

// For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

// 2
// 1.5
// 2
// 3.5
// 2
// 2
// 2

function activeMedian(array) {
  let medianValues = [];
  let median = 0;
  array.forEach((number) => {
    let mid = Math.floor(medianValues.length / 2.0).toFixed(1);
    console.log("Mid", mid);
    medianValues.push(number);
    medianValues.sort();
    console.log("Array of Values", medianValues);
    median =
      medianValues.length % 2 === 0 ? (medianValues[mid - 1] + medianValues[mid]).toFixed(1) / 2 : medianValues[mid];

    console.log("Current Median", median);
  });
}

console.log(activeMedian([2, 1, 5, 7, 2, 0, 5]));

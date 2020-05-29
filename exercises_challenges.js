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

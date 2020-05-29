// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();

// // Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// Write a method that prints out every number from 1 to 100.

// function numbers1To100() {
//   for (let i = 0; i < 101; i++) {
//     console.log(i);
//   }
// }
// numbers1To100();
// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function oddNumbers1To100() {
//   for (let i = 1; i < 101; i += 2) {
//     console.log(i);
//   }
// }
// oddNumbers1To100();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function counting55(numbers) {
//   let counter = 0;
//   numbers.forEach(number => {
//     if (number === 55) {
//       counter += 1;
//     }
//   });
//   console.log(counter);
// }

// counting55([3, 5, 55, 6, 8, 55]);

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesomesauce(array) {
//   let new_array = [];
//   array.forEach(string => {
//     new_array.(string);
//     new_array.push("awesomesauce");
//   });
//   console.log(new_array);
// // }
// awesomesauce(["a", "b", "c", "d", "e"]);

// console.log(["a", "b", "c", "d", "e"]);
// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// item_amounts = { chair: 5, table: 2 };

// item_amounts.chair -= 2;

// console.log(item_amounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}

// item_amounts = { chair: 5, table: 2 };
// item_amounts["desks"] = 7;
// console.log(item_amounts);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   if (number === 1) {
//     return number;
//   } else {
//     number = number * factorial(number - 1);
//     return number;
//   }
// }

// function factorial(number) {

//   while
//   if (number === 1) {
//     return number;
//   } else {
//     number = number * (number - 1);
//   }
//   console.log(number);
// }

// factorial(5);
// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function greatestNumber(array) {
//   console.log(Math.max(array));
// }

// greatestNumber([5, 4, 8, 1, 2]);

// function greatestNumber(array) {
//   let higherNumber = 0;
//   array.forEach(number => {
//     if (number > higherNumber) {
//       higherNumber = number;
//     }
//   });
//   return higherNumber;
// }

// console.log(greatestNumber([5, 4, 8, 1, 2]));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

// function descending(array) {
//   let descendArray = [];
//   array.forEach(number => {
//     descendArray.unshift(number);
//   });
//   return descendArray;
// }

// console.log(descending([1, 2, 3, 4, 5]));

// function bubbleSort(array) {
//   let sortArray = array;
//   let isSwapped = false;
//   let nextNum;
//   let num;
//   let arrayLength = sortArray.length;
//   let i = 0;

//   while (isSwapped || i === 0) {
//     isSwapped = false;
//     for (let i = 0; i < arrayLength; i++) {
//       nextNum = sortArray[i + 1];
//       num = sortArray[i];
//       if (sortArray[i] > sortArray[i + 1]) {
//         sortArray[i] = nextNum;
//         sortArray[i + 1] = num;
//         isSwapped = true;
//         console.log(sortArray);
//       }
//       console.log(sortArray);
//     }
//     if (isSwapped === false) {
//       break;
//     }
//   }
//   return sortArray;
// }

// console.log(bubbleSort([2, 6, 3, 5, 12, 1]));

// Solve the following problems first in Ruby, then convert the solution to JavaScript.
// 1. Write a function that takes in an array of numbers and returns its sum.

function sum(array) {
  let allSum = 0;
  array.forEach(number => {
    allSum += number;
  });
  return allSum;
}

// console.log(sum([2, 5, 3, 4]));
// 2. Write a function that takes in an array of strings and returns the smallest string.

function smallestString(array) {
  let theSmallestString = array[0];
  array.map(string => {
    if (string.length < theSmallestString.length) {
      theSmallestString = string;
    }
  });
  return theSmallestString;
}

// console.log(smallestString(["hello", "world", "ruby", "javascript"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reverseOrder(array) {
  let reversedArray = [];
  array.map(number => {
    reversedArray.unshift(number);
  });
  return reversedArray;
}

// console.log(reverseOrder([1, 2, 3, 4]));

// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter "a".

function howManyAs(array) {
  let counter = 0;
  array.forEach(string => {
    if (string[0] === "a") {
      counter += 1;
    }
  });
  return counter;
}

// console.log(howManyAs(["apple", "banana", "peach", "avocado"]));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

function joinningStrings(array) {
  let singleString = array.join(",");
  return singleString;
}

// console.log(joinningStrings(["Hi", "I", "am", "a", "string."]));

// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

function superProduct(array) {
  let product = 1;
  array.forEach(number => {
    product *= number;
  });
  return product;
}
// console.log(superProduct([2, 4, 6, 8]));
// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.

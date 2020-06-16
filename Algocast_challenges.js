// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charsA = {};
  let charsB = {};
  let newA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let newB = stringB.replace(/[^\w]/g, "").toLowerCase();

  for (let char of newA) {
    charsA[char] = charsA[char] + 1 || 1;
  }
  for (let char of newB) {
    charsB[char] = charsB[char] + 1 || 1;
  }
  console.log(charsA);
  console.log(charsB);
  if (Object.keys(charsA).length !== Object.keys(charsB).length) {
    return false;
  }
  for (let char in charsA) {
    if (charsA[char] !== charsB[char]) {
      return false;
    }
  }
  return true;
}
// anagrams("hello", "llohe");
module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let newA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort();

//   let newB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort();

//   if (newA.join("") === newB.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let splittedStr = str.split(" ");
  const newStr = [];

  for (let word of splittedStr) {
    let capitalizeChar = word[0].toUpperCase();
    let lowerChars = word.slice(1);
    newStr.push(capitalizeChar + lowerChars);
  }
  return newStr.join(" ");
}
// console.log(capitalize("look, it is working!"));
module.exports = capitalize;

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let newArr = [];
  let index = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }
  return newArr;
}
chunk([1, 2, 3], 1);
module.exports = chunk;

// function chunk(array, size) {
//   let newArr = [];
//   let length = 0;
//   if (array.length % size === 0) {
//     length = array.length / size - 1;
//   } else {
//     length = array.length / size;
//   }
//   for (let i = 0; i <= length; i++) {
//     newArr.push(array.splice(0, size));
//   }
//   console.log(newArr);
//   return newArr;
// }

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = "";
  const chars = {};
  let max = 0;

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  // const character = str.split("").reduce((char, qty) => {
  //   if (!char[qty]) {
  //     char[qty] = 0;
  //   }
  //   char[qty]++;
  //   return char;
  // }, {});

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}
// console.log(maxChar("abcccccccd"));

module.exports = maxChar;

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverse = n.toString().split("").reverse().join("");
  return parseInt(reverse) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   let num = n.toString().split("");
//   if (num[0] === "-") {
//     num = parseInt("-" + num.reverse().join(""));
//   } else {
//     num = parseInt(num.reverse().join(""));
//   }

//   return num;
// }

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// function reverse(str) {git
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

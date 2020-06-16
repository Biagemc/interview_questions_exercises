// Write a function solution that, fiven an Interger N returns the maximum possible value obtained by inserting one 5 digit inside decimal representation of integer N.

// Examples:

// 1. Given N=268, the function should return 5268.
// 2. Given N=670, the function should return 6750.
// 3. Given N=0, the function should return 50.
// 4. Given N=-999, the function should return -5999.

// Assume that:

//   N is an integer within the range [-8,000..8,000].

// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function ofFive(num) {
  let maxValue = [];
  let arrayOfNum = num.toString().split("");
  let valueCheck = arrayOfNum;
  console.log(arrayOfNum.length);
  for (let i = 0; i < arrayOfNum.length; i++) {
    let arrayOfNum = num.toString().split("");
    maxValue.push(parseInt(arrayOfNum.splice(i, 0, "5").join("")));
  }
  return maxValue;
}

console.log(ofFive(268));
console.log(ofFive(670));
console.log(ofFive(0));
console.log(ofFive(-999));

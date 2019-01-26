/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all 
 * the numbers between them.
 * 
 * The lowest number will not always come first.
 */


function sumAll(arr) {
  arr.sort((x, y) => x - y);
  let sum = arr[0];
  for(let i = arr[0] + 1; i <= arr[1]; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumAll([4, 1]));
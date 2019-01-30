/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
 * as well as by all sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
 * divisible by all numbers between 1 and 3. The answer here would be 6.
 */


function smallestCommons(arr) {

    var min = arr[0],
        max = arr[1];

    if (arr[0] > arr[1]) {
        min = arr[1];
        max = arr[0];
    }
    var result = min;
    for (var i = min; i <= max; i++) {
        result = lcm(i, result);
    }

    return result;
}

// Euclidean's Algorithm for GCD
function gcd(a, b) {

    return !b ? a : gcd(b, a % b);
}

// LCM function
function lcm(a, b) {

    return a * (b / gcd(a, b));
}

console.log(smallestCommons([1, 5]));
/**
 * Remember that Math.random() can never quite return a 1 and, because we're rounding down, 
 * it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.
 * 
 * Putting everything together, this is what our code looks like:
 * 
 * Math.floor(Math.random() * 20);
 * We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() 
 * function to round the value down to the nearest whole number.
 * 
 * Use this technique to generate and return a random whole number between 0 and 9.
 */

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
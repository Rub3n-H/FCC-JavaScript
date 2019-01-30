/**
 * Create a function that sums two arguments together. 
 * 
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * 
 * Calling this returned function with a single argument will then return the sum:
 * 
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 * 
 * If either argument isn't a valid number, return undefined.
 */


function addTogether() {

    var args = Array.from(arguments);

    return args.some(i => typeof i !== "number") ?
        undefined :
        args.length > 1 ?
        args.reduce((x, i) => x += i, 0) :
        (i) => typeof i === "number" ?
        i + args[0] :
        undefined;

}

console.log(addTogether("http://bit.ly/IqT6zt"));
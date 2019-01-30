/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */


function steamrollArray(arr) {
    // I'm a steamroller, baby
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
    }, []);
}

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));
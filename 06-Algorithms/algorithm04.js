/**
 * Return the length of the longest word in the provided sentence. Your response should be a number.
 */


function findLongestWordLength(str) {
    let arr = str.split(" ");
    let len = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > len) {
            len = arr[i].length;
        }
    }
    return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
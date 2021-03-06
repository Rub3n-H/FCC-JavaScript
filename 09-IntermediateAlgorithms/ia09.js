/**
 * Find the missing letter in the passed letter range and return it.
 * 
 * If all letters are present in the range, return undefined.
 */


function fearNotLetter(str) {
    
    if (!str.match(/^[a-zA-Z]+$/)) {
        return;
    }

    for (var i = 0; i < str.length - 1; i++) {
        if ((str.charCodeAt(i + 1) - str.charCodeAt(i)) != 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
}

console.log(fearNotLetter("abce"));
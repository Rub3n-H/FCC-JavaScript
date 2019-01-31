/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
 * Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * 
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. 
 * Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */


function rot13(str) { // LBH QVQ VG!

    var encoded = str.split(" ");

    var decoded = [];

    for (let i = 0; i < encoded.length; i++) {

        var temp = '';
        for (let j = 0; j < encoded[i].length; j++) {
            if (encoded[i].charCodeAt(j) > 64 && encoded[i].charCodeAt(j) < 91) {
                if (encoded[i].charCodeAt(j) >= 78) {
                    temp += String.fromCharCode(encoded[i].charCodeAt(j) - 13);
                } else {
                    temp += String.fromCharCode(encoded[i].charCodeAt(j) + 13);
                }
            } else {
                temp += encoded[i][j];
            }
        }

        decoded.push(temp);
    }
    return decoded.join(" ");
}

console.log(rot13("SERR CVMMN!"));
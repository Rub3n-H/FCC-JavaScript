/**
 * Translate the provided string to pig latin.
 * 
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, 
 * moves it to the end of the word and suffixes an "ay".
 * 
 * If a word begins with a vowel you just add "way" to the end.
 * 
 * Input strings are guaranteed to be English words in all lowercase.
 */


function translatePigLatin(str) {

    const char = str.search(/[aeiou]/);

    switch (char) {

        case 0:
            str = `${str}way`;
            break;

        case -1:
            str = `${str}ay`;
            break;

        default:
            str = `${str.substr(char) + str.substr(0, char)}ay`;
            break;

    }

    return str;
}

console.log(translatePigLatin("glove"));
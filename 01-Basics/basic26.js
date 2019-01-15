/**
 * We can also use the += operator to concatenate a string onto the end of an existing string variable. 
 * This can be very helpful to break a long string over several lines.
 * 
 * Note
 * Watch out for spaces. Concatenation does not add spaces between concatenated strings, 
 * so you'll need to add them yourself.
 * 
 * Build myStr over several lines by concatenating these two strings: 
 * "This is the first sentence. " and "This is the second sentence." using the += operator. 
 * 
 * Start by assigning the first string to myStr, then add on the second string.
 */

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Solution
var myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
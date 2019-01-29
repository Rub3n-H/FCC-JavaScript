/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 */


function convertHTML(str) {

    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };

    return str.replace(/[&<>"']/g, x => map[x]);
}

console.log(convertHTML("Dolce & Gabbana"));
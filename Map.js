/**
 * ES5 style.
 */
var dict = Object.create(null);
function countWords(word) {
    var escapedWord = escapeKey(word);
    if (escapedWord in dict) {
        dict[escapedWord]++;
    } else {
        dict[escapedWord] = 1;
    }
}
function escapeKey(key) {
    if (key.indexOf('__proto__') === 0) {
        return key+'%';
    } else {
        return key;
    }
}

/**
 * ES6 style
 */

 const map = new Map();
 function countWords(word){
     const count = map.get(word) || 0;
     map.set(word, count+1);
 }



// Write a JavaScript program to reverse a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello"));   // "olleh"
console.log(reverseString("world"));   // "dlrow"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

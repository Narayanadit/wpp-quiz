
// Write a JavaScript program to extract the first half of an even string.


function extractFirstHalf(str) {
    if (str.length % 2 !== 0) {
        return "The string length is not even.";
    }
    return str.slice(0, str.length / 2);
}

// Test cases
console.log(extractFirstHalf("hellothere"));  // "hello"
console.log(extractFirstHalf("abcdef"));      // "abc"
console.log(extractFirstHalf("12345678"));    // "1234"

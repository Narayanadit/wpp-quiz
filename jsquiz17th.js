
// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.

function replaceWithNextChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            // For lowercase letters
            result += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char >= 'A' && char <= 'Z') {
            // For uppercase letters
            result += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            // For non-alphabetic characters, keep them unchanged
            result += char;
        }
    }
    return result;
}

// Example usage:
let inputString = "abcxyzABCXYZ";
let outputString = replaceWithNextChar(inputString);
console.log("Original string:", inputString);
console.log("String after replacement:", outputString);

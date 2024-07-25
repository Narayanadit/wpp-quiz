function addLastThreeCharsFrontAndBack(str) {
    // Ensure the string length is 3 or more
    if (str.length < 3) {
        return "String length must be 3 or more.";
    }

    // Get the last 3 characters of the string
    let lastThreeChars = str.slice(-3);

    // Create the new string by adding the last 3 characters at both the front and back
    let newStr = lastThreeChars + str + lastThreeChars;

    return newStr;
}

// Example usage
let originalString = "JavaScript";
let resultString = addLastThreeCharsFrontAndBack(originalString);

console.log("Original String: " + originalString);
console.log("Modified String: " + resultString);

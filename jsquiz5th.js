function removeCharacter(str, position) {
    // Ensure the position is within the bounds of the string
    if (position < 0 || position >= str.length) {
        return str; // Return the original string if position is out of bounds
    }

    // Remove the character at the specified position
    let modifiedStr = str.slice(0, position) + str.slice(position + 1);

    return modifiedStr;
}

// Example usage
let originalString = "Hello, World!";
let positionToRemove = 7; // Removing the character at index 7 (0-based index)
let modifiedString = removeCharacter(originalString, positionToRemove);

console.log("Original String: " + originalString);
console.log("Modified String: " + modifiedString);

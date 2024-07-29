function transformString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        let firstThreeLower = str.substring(0, 3).toLowerCase();
        let restOfString = str.substring(3);
        return firstThreeLower + restOfString;
    }
}

// Example usage:
console.log(transformString("HELLO")); // Output: "helLO"
console.log(transformString("HI"));    // Output: "HI"
console.log(transformString("world")); // Output: "worLd"

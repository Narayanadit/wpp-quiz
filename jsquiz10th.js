function transformString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    return str.slice(0, 3).toLowerCase() + str.slice(3);
}

// Test cases
console.log(transformString("HelloWorld")); // "helLoWorld"
console.log(transformString("Hi"));         // "HI"
console.log(transformString("JAVASCRIPT")); // "javASCRIPT"
console.log(transformString("abc"));        // "abc"
console.log(transformString("AB"));         // "AB"

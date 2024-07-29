// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31



function checkIncreasingMode(a, b, c) {
    if (a < b && b < c) {
        return "Strict mode";
    } else if (a <= b && b <= c) {
        return "Soft mode";
    } else {
        return "Neither mode";
    }
}

// Test cases
console.log(checkIncreasingMode(10, 15, 31)); // Strict mode
console.log(checkIncreasingMode(24, 22, 31)); // Neither mode
console.log(checkIncreasingMode(22, 22, 31)); // Soft mode
console.log(checkIncreasingMode(5, 5, 5));    // Soft mode
console.log(checkIncreasingMode(7, 8, 9));    // Strict mode
console.log(checkIncreasingMode(9, 7, 8));    // Neither mode

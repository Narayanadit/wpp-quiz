function isMultipleOf3Or7(num) {
    // Ensure the number is positive
    if (num <= 0) {
        return false; // Return false if the number is not positive
    }

    // Check if the number is a multiple of 3 or 7
    if (num % 3 === 0 || num % 7 === 0) {
        return true; // Return true if the number is a multiple of 3 or 7
    } else {
        return false; // Return false if the number is not a multiple of 3 or 7
    }
}

// Example usage
let number = 21; // Replace with the number you want to check
if (isMultipleOf3Or7(number)) {
    console.log(number + " is a multiple of 3 or 7.");
} else {
    console.log(number + " is not a multiple of 3 or 7.");
}

function isMultipleOf3Or7(num) {
    
    if (num <= 0) {
        return false; 
    }

    
    if (num % 3 === 0 || num % 7 === 0) {
        return true; 
    } else {
        return false; 
    }
}

let number = 21; 
if (isMultipleOf3Or7(number)) {
    console.log(number + " is a multiple of 3 or 7.");
} else {
    console.log(number + " is not a multiple of 3 or 7.");
}

function closestTo100(a, b) {
    const target = 100;
    const diffA = Math.abs(target - a);
    const diffB = Math.abs(target - b);

    if (diffA < diffB) {
        return a;
    } else if (diffB < diffA) {
        return b;
    } else {
        return "Both numbers are equally close to 100";
    }
}

// Example usage:
const num1 = 85;
const num2 = 115;
console.log(`The number closest to 100 is: ${closestTo100(num1, num2)}`);

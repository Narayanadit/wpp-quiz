// 
//  Write a JavaScript program to count the number of vowels in a given string.


function countVowels(str) {
    // Define the vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    // Iterate through the string
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Test cases
console.log(countVowels("hello"));       // 2
console.log(countVowels("world"));       // 1
console.log(countVowels("JavaScript"));  // 3


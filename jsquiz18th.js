
// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. (edited)
// July 13, 2024



function maxAdjacentDifference(arr){
if(arr.length < 2){
    throw new error('the array must contain atleast two elements.');
     
}
let maxdifference = Math.abs(arr[1] - arr[0]);

for(let i=1; i<arr.length;i++){
    let difference = Math.abs(arr[i+1]- arr[i]);
    if(difference>maxdifference){
        maxdifference = difference;
    }
}
return maxdifference;
}

let array = [1, 9, 2, 5, 7, 3];
let maxDiff = maxAdjacentDifference(array);
console.log("The maximum difference between any two adjacent elements is:", maxDiff);
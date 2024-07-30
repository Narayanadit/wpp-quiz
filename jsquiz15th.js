// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3


function sumofthreeelements(arr){
    if(arr.length!==3){
        throw new error("the array must exactly three elements.")
    }
    return arr[0]+arr[1]+arr[2]; 
}


const array = [1,2,3];
const sum = sumofthreeelements(array);
console.log('the sum of three element is ;',sum);
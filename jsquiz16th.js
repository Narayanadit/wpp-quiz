// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swapingfirstandlast(arr){
if(arr.length < 1){
    throw new error('the array must contain atleast 1 element.');
}
if(arr.length===1){
    return arr;
}


let temp = arr[0]; 
arr[0] = arr[arr.length-1];
arr[arr.length-1]=temp;
return arr;
}

let array = [1,2,3,4,5];
console.log('original array',array);
let swappedArray = swapingfirstandlast(array);
console.log('Array after swapping the first and last',swappedArray);

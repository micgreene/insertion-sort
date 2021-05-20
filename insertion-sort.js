'use strict';

var testArr = [8,4,23,42,16,15];

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){

    //this will create an integer which represents the previous item in the array.
    let j = i -1;

    //this assigns the current array index item being evaluated inside a temporary variable 
    let temp = arr[i];


    //Each recursion of the while loop will occur only while:
      //1) j has not gone out of the index of the array (below 0) AND
      //2) temp evaluates as less than the previous index item of the array (since j = i-1)
    while(j >= 0 && temp < arr[j]){

      //), the current index’s array item is reassigned with the previous index’s item
      arr[j + 1] = arr[j];

      //this will cause j to eventually reach -1
      j = j - 1;
    }

    //This will ensure that however many places the while loop evaluated the array by decrementing j, the temp value will be placed earlier in the array up until that point
    arr[j + 1] = temp;
  }

  return arr;
}

console.log(insertionSort(testArr));

module.exports = insertionSort;
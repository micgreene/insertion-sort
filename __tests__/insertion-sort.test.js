'use strict';

const insertionSort = require('../insertion-sort.js');

describe('should sort an array of numbers lowest to highest value', () => {
  let testArray = [8,4,23,42,16,15];
  let reverseSorted = [20,18,12,8,5,-2];
  let uniques = [5,12,7,5,5,7];
  let nearlySorted = [2,3,5,7,13,11];

  //case #1 - Random Array 
  it('Can sort a random array', () => {
    expect(insertionSort(testArray)).toEqual([4,8,15,16,23,42]);
  });

  //case #2 - Reverse Sorted Array
  it('Can sort an already reverse sorted array', () => {
    expect(insertionSort(reverseSorted)).toEqual([-2,5,8,12,18,20]);
  });

  //case #3 - Array with Multiple Unique Numbers
  it('Can sort an array which contains multiples of the same number', () => {
    expect(insertionSort(uniques)).toEqual([5,5,5,7,7,12]);
  });

  //case #4 - Nearly Sorted Array
  it('Can sort an array which is nearly sorted already', () => {
    expect(insertionSort(nearlySorted)).toEqual([2,3,5,7,11,13]);
  });
});
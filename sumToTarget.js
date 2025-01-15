/* From Google
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. */

function twoSum (arr, k) {
    // Check each element in the array
    for (var i = 0; i < arr.length; i++) {
        // Check each other element in the array
        for (var j = i + 1; j < arr.length; j++) {
            // Check if the sum of two elements equals to k
            if (arr[i] + arr[j] === k) {
                // Return true if pair sum is found
                return true;
            } 
        }
    }
    // Return false if no pair sum is found
    return false;
}

// array for the list of numbers
let numbersList = [10, 15, 3, 7];
// value of k
let kValue = 17;

console.log("RESULT:", twoSum(numbersList, kValue));

// TESTING:

//**TEST 1: An empty array and any number as k, like ([], 10), which should return false.**// 
let arrTest1 = [];
let kTest1 = 10;
console.log("TEST 1:", twoSum(arrTest1, kTest1));

//**TEST 2: An array with just one element with the exact number as k, like ([5], 5), which should return false.**// 
let arrTest2 = [5];
let kTest2 = 5;
console.log("TEST 2:", twoSum(arrTest2, kTest2));

//**TEST 3: An array with negative values and a negative k, like ([-5, 2, -8, 6], -3), which should return true.**// 
let arrTest3 = [-5, 2, -8, 6];
let kTest3 = -3;
console.log("TEST 3:", twoSum(arrTest3, kTest3)); 

//**TEST 4: An array with floating-point numbers and a floating-point k, like ([1.5, 2.5, 3.5], 4)), which should return true.**// 
let arrTest4 = [1.5, 2.5, 3.5];
let kTest4 = 4;
console.log("TEST 4:", twoSum(arrTest4, kTest4)); 

//**TEST 5: An array that has duplicated numbers and k is the sum of both, like ([4, 6, 4, 2], 8)), which, you guessed it, should return true.**// 
let arrTest5 = [4, 6, 4, 2];
let kTest5 = 8;
console.log("TEST 5:", twoSum(arrTest5, kTest5)); 

//**TEST 6: An array where all elements sum up to the value of k, like ([1, 2, 3, 4], 10)), which should return false.**// 
let arrTest6 = [1, 2, 3, 4];
let kTest6 = 10;
console.log("TEST 6:", twoSum(arrTest6, kTest6));

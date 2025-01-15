/* Sorting Algorithm
Given a list of numbers, [100, 95, 10, -10, 32, -55, 44, 10, 33, -564] 
sort them using an insertion sort and a selection sort. 
The output should be a sorted array. 
You must create two separate functions for each sorting algorithm. */

//** INSERTION SORT **//

function insertionSort(inputArr) {
    // Get the lenght of the input array
    let arrayLength = inputArr.length;

    // Iterate through the array starting from the second element
    for (let currentIndex = 1; currentIndex < arrayLength; currentIndex++) {
        // Choose the current element to be inserted into the sorted part of the array
        let currentElement = inputArr[currentIndex]; //** SELECT element to INSERT

        // Initialize an index to the last sorted element
        let lastSortedIndex = currentIndex - 1; //** INDEX to LAST sorted element

        // Compare 'currentElement' with each element in the sorted part of the array (inputArr[0..currentIndex-1])
        // Move backwards through the sorted part of the array
        while (lastSortedIndex >= 0 && inputArr[lastSortedIndex] > currentElement) {
            // If sorted element is GREATER THAN 'currentElement', shift it to the right
            inputArr[lastSortedIndex + 1] = inputArr[lastSortedIndex]; //** SHIFT to the RIGHT
            lastSortedIndex--; //** MOVE LEFT
        }

        // Place 'currentElement' at its correct position in the sorted part of the array
        inputArr[lastSortedIndex + 1] = currentElement; //** INSERT 'currentElement'
    }

    // Return the sorted array
    return inputArr;
}

// Create the original array
let numbersArray = [100, 95, 10, -10, 32, -55, 44, 10, 33, -564];
console.log("Original Array:", numbersArray);

// Sort the array using insertion sort
let insertionSortedArray = insertionSort(numbersArray);
console.log("Insertion Sorted Array:", insertionSortedArray);


//** SELECTION SORT **//

function selectionSort(inputArr) {
    // Get the lenght of the input array
    let arrayLength = inputArr.length;

    // Iterate through the array to select each element for sorting
    for (let currentIndex = 0; currentIndex < arrayLength - 1; currentIndex++) {
        // Assume the current index has the minimum value initially
        let minIndex = currentIndex;

        // Iterate through the remaining unsorted part of the array to find the smallest element
        for (let nextIndex = currentIndex + 1; nextIndex < arrayLength; nextIndex++) {
            // Check if the element at nextIndex is smaller than the current minimum element
            if (inputArr[nextIndex] < inputArr[minIndex]) {
                // Update minIndex to the index of the smaller element found
                minIndex = nextIndex;
            }
        }

        // If minIndex has changed from currentIndex, swap the elements
        if (minIndex !== currentIndex) {
            // Swap the elements at currentIndex and minIndex
            let temp = inputArr[currentIndex]; // Temporary variable to hold the current element
            inputArr[currentIndex] = inputArr[minIndex]; // Place the smallest element at currentIndex
            inputArr[minIndex] = temp; // Place the initial element at minIndex
        }
    }

    // Return the sorted array
    return inputArr;
}

// Sort the array using selection sort
let selectionSortedArray = selectionSort(numbersArray);
console.log("Selection Sorted Array:", selectionSortedArray);

////////////
// TESTING:

// An empty array (should return an empty array).
console.log("Insertion Sorted TEST1:", insertionSort([]));
console.log("Selection Sorted TEST1:", selectionSort([]));
// An array with just one element.
console.log("Insertion Sorted TEST2:", insertionSort([10]));
console.log("Selection Sorted TEST2:", selectionSort([10]));
// An already sorted array.
console.log("Insertion Sorted TEST3:", insertionSort([1, 2, 3, 4, 5]));
console.log("Selection Sorted TEST3:", selectionSort([1, 2, 3, 4, 5]));
// An array sorted in a reverse manner.
console.log("Insertion Sorted TEST4:", insertionSort([5, 4, 3, 2, 1]));
console.log("Selection Sorted TEST4:", selectionSort([5, 4, 3, 2, 1]));


/* From Amazon
Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A". 
Implement run-length encoding and decoding. 
You can assume the string to be encoded has no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid. */


//** run-length ENCODING **//

// Define a function named runLengthEncoding that takes a string as input
function runLengthEncoding(string) {
    // Initialize an empty array to store the encoded string parts
    let encodedString = [];
    // Initialize a counter variable to keep track of consecutive characters 
    let count = 1;

    // Iterate through each character in the input string
    for (let i = 0; i < string.length; i++) {
        // Check if the current character is the same as the next one
        if (string[i] === string[i + 1]) {
            // If true, increment the count as the characters are consecutive the same 
            count++;
        } else {
            // If characters are different or end of string is reached, push the count and current character 
            encodedString.push(count + string[i]);
            // Reset the count back to 1 for the next character sequence 
            count = 1;
        }
    }

    // Join the array into a single string and return the encoded string 
    return encodedString.join("");
}

// Example:
let inputString = "AAAABBBCCDAA";
let encodedResult = runLengthEncoding(inputString);
console.log("Original string:", inputString);
console.log("Encoded string:", encodedResult);


//** run-length DECODING **//

// Function named runLenghtDecoding takes a string 's' as input and returns a decoded string 
function runLenghtDecoding(s) {
    // Initialize a variable 'decodedString' to store the decoded output 
    let decodedString = "";

    // Loop through the string 's' starting from index 0, with a step of 2 
    // This loop processes pairs of characters: s[index] and s[index+1] 
    for (let index = 0; index < s.length; index += 2) {

        // Extract the number of repetitions as an integer from s[index] 
        let count = parseInt(s.charAt(index));

        // Extract the character to be repeated from s[index+1] 
        let letter = s.charAt(index + 1); 

        // Inner loop that repeats 'letter' 'count' times
        for (let j = 0; j < count; j++) {
            // Append 'letter' to 'decodedString' for each iteration of the inner loop 
            decodedString += letter;
        }
    }

    // Return the fully decoded string stored in 'decodedString'
    return decodedString;
}

// Example:
let stringToDecode = "4A3B2C1D2A";
let decodedResult = runLenghtDecoding(stringToDecode);
console.log("String to Decode:", stringToDecode);
console.log("Decoded string:", decodedResult);


//////////////////
// TESTING:

// An empty string, which should return an empty string.
console.log("test1 (empty string) =", runLengthEncoding(""));
// Decoding
console.log("Dec test1 =", runLenghtDecoding(""));
// A string with a single character, that should return just one <character>. 
console.log("test2 (1A) =", runLengthEncoding("A"));
// Decoding
console.log("Dec test2 =", runLenghtDecoding ("1A"));
// A string with non-consecutive repeating characters, like "acbcba", which should return 1a1c1b1c1b1a. 
console.log("test3 (1a1c1b1c1b1a) =", runLengthEncoding("acbcba"));
// Decoding
console.log("Dec test3 =", runLenghtDecoding("1a1c1b1c1b1a"));
// A string with special characters, like @##$$%, which should return 1@2#2$1%. 
console.log("test4 (1@2#2$1%) =", runLengthEncoding("@##$$%"));
// Decoding
console.log("Dec test4 =", runLenghtDecoding("1@2#2$1%"));
// A string with spaces, like aa bbbcc, which should return 2a3 3b2c. 
console.log("test5 (2a3 3b2c) =", runLengthEncoding("aa bbbcc"));
// Decoding
console.log("Dec test5 =", runLenghtDecoding("2a3 3b2c"));
// A string with uppercase and lowercase characters, like aAaBBb, which should return 1a1A1a2B1b. 
console.log("test6 (1a1A1a2B1b) =", runLengthEncoding("aAaBBb"));
// Decoding
console.log("Dec test6 =", runLenghtDecoding("1a1A1a2B1b"));


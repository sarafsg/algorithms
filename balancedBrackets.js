/* From Facebook
Given a string of round, curly, and square open and closing brackets, 
return true if the brackets are balanced (well-formed).
For example:
Given the string "([])", return true.
Given the string "([)]" or "((()", return false. */


function isValidParentheses(inputString) {
    // Initialize an empty stack to keep track of opening brackets 
    let stackOpenBrackets = [];

    // Iterate through each character in the input string 
    for (let i = 0; i < inputString.length; i++) {
        // Get the current character from the input string
        let currentChar = inputString[i];

        // Check if the current character is an opening parenthesis 
        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
            // If it is an opening parenthesis, push it onto the stack 
            stackOpenBrackets.push(currentChar);
        } else if (currentChar === ')' || currentChar === '}' || currentChar === ']') {
            // If it is a closing parenthesis
            // Get the top element from the stack
            let topOfStack = stackOpenBrackets[stackOpenBrackets.length - 1];

            // Check if there's a matching opening parenthesis for the closing one 
            if ((currentChar === ')' && topOfStack === '(') ||
                (currentChar === '}' && topOfStack === '{') ||
                (currentChar === ']' && topOfStack === '[')) {
                // If there's a match, pop the top element from the stack 
                stackOpenBrackets.pop();
            } else {
                // If there's no match, return false (not balanced) 
                return false;
            }
        }
    } 

    // After iterating through all characters, check if the stack is empty 
    // If the stack is empty, all parentheses have been matched correctly
    return stackOpenBrackets.length === 0;
}

// TESTING:
console.log(isValidParentheses("()"), "should return true");
console.log(isValidParentheses("{[()]}"), "should return true");
console.log(isValidParentheses("{[()]"), "should return false");
console.log(isValidParentheses("{[()]}}"), "should return false");
console.log(isValidParentheses("{[()]"), "should return false");

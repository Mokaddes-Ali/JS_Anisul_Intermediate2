// Higher Order Function
// A function that takes another function as an argument or returns a function as a result is called a higher order function.

//Callback Function

// A callback function is a function that is passed as an argument to another function.

// Example 1

function calculate(num1, num2, operation) {
    
     
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const result = calculate (5, 4 , add);


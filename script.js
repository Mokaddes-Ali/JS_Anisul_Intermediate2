// Higher Order Function
// A function that takes another function as an argument or returns a function as a result is called a higher order function.

//Callback Function

// A callback function is a function that is passed as an argument to another function.

// Example 1


// callback function && higher order function
const calculate = (num1, num2, operation) => {  //calaute is a higher order function
    return operation(num1, num2);  //opration is a callback function
     
}

const add = (num1, num2) => {
    return num1 + num2;
}

const sub = (num1, num2) => {
    return num1 + num2;
}


const multiply = (num1, num2) => {
    return num1 + num2;
}

const divided = (num1, num2) => {
    return num1 + num2;
}

let result = calculate (5, 4 , add);
console.log(result);

result = calculate (500, 45 , sub);
console.log(result);

result = calculate (5, 4 , multiply);
console.log(result);

result = calculate (5, 4 , divided);
console.log(result);



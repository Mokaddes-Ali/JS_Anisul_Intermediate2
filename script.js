// // Higher Order Function
// // A function that takes another function as an argument or returns a function as a result is called a higher order function.

// //Callback Function

// // A callback function is a function that is passed as an argument to another function.

// // Example 1


// // callback function && higher order function
// const calculate = (num1, num2, operation) => {  //calaute is a higher order function
//     return operation(num1, num2);  //opration is a callback function
     
// }

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// const sub = (num1, num2) => {
//     return num1 + num2;
// }


// const multiply = (num1, num2) => {
//     return num1 + num2;
// }

// const divided = (num1, num2) => {
//     return num1 + num2;
// }

// let result = calculate (5, 4 , add);
// console.log(result);

// result = calculate (500, 45 , sub);
// console.log(result);

// result = calculate (5, 4 , multiply);
// console.log(result);

// result = calculate (5, 4 , divided);
// console.log(result);


// //forEach() Method

// const persons = ['John', 'Doe', 'Jane', 'Doe'];

// for (let i = 0; i < persons.length; i++) {
//     console.log(persons[i]);
// }

// persons.forEach((person) => {
//     console.log(person);
// });


// //example 2

// const numbers = [1, 2, 3, 4, 5];

// const square = [];

// for (let i = 0; i < numbers.length; i++) {
//     square.push(numbers[i] * numbers[i]);
// }

// console.log(square);

// const numbers1 = [1, 2, 3, 4, 5];

// const square1 = [];

// numbers1.forEach((number) => {
//     square1.push(number * number);
// }
// );

// console.log(square1);

// //map() Method

// const numbers2 = [1, 2, 3, 4, 5];

// const square2 = numbers2.map((number) => {
//     return number * number;
// }
// );

// console.log(square2);

// //example map more

// const persons1 = [
//     { name: 'John', age: 30 },
//     { name: 'Doe', age: 25 },
//     { name: 'Jane', age: 22 }
// ];

// const names = persons1.map((person) => {
//     return person.name;
// }
// );

// console.log(names);

// //filter() Method

// const products = [
//     { name: 'laptop', price: 1000 },
//     { name: 'desktop', price: 1500 },
//     { name: 'phone', price: 500 }
// ];

// const filteredProducts = products.filter((product) => {
//     return product.price >= 1000;
// }
// );

// console.log(filteredProducts);

// // filter && map

// const products1 = [
//     { name: 'laptop', price: 1000 },
//     { name: 'desktop', price: 1500 },
//     { name: 'phone', price: 500 }
// ];

// const filteredProducts1 = products1.filter((product) => {
//     return product.price >= 1000;
// }
// ).map((product) => {
//     return product.name;
// }
// );

// console.log(filteredProducts1);

// // search by filter name

// const products2 = [
//     { name: 'laptop', price: 1000 },
//     { name: 'desktop', price: 1500 },
//     { name: 'phone', price: 500 }
// ];

// const search = 'phone';

// const filteredProducts2 = products2.filter((product) => {
//     return product.name.includes(search);
// }
// );

// console.log(filteredProducts2);


// // search by lower and upper case letters

// const products3 = [
//     { name: 'laptop', price: 1000 },
//     { name: 'desktop', price: 1500 },
//     { name: 'phone', price: 500 }
// ];

// const search1 = 'Phone';

// const filteredProducts3 = products3.filter((product) => {
//     return product.name.toLowerCase().includes(search1.toLowerCase());
// }
// );

// console.log(filteredProducts3);

// //reduce() Method

// const numbers3 = [1, 2, 3, 4, 5];

// //accumulator starts from 0 initial value
// const sum = numbers3.reduce((accumulator, currentValue) => {
//     return accumulator += currentValue;
//     //carrent value is object one by one
// }
// );

// console.log(sum);

// //example 2

// const cartProducts = [
//     {id:1, name: 'laptop', price: 1000 },
//     {id:2, name: 'desktop', price: 1500 },
//     { id:3, name: 'phone', price: 500 }
// ]

// const totalPrice = cartProducts
// .map(cartItem => cartItem.price)
// .reduce((accumulator, currentValue) => 
//     accumulator += currentValue, 0);

// console.log(`You have need pay:${totalPrice}`);


// some(boolean value true or false) => atleast one element is true

// some in use for check the condition is true or false in 
// any condition or range of condition such as 1 to 10 or 1 to 100
// if any condition is true then return true otherwise return false


// variable name with has a value ,, is the good practise

// at least one item price is greater than 1000

// const hasPrice = cartProducts.some(cartItem => cartItem.price > 1000);

// console.log(hasPrice);



// //every(boolean value) => all element is true
// every is oposite of some

// const allPrice = cartProducts.every(cartItem => cartItem.price > 2000);

// console.log(allPrice);



// sorting products based ob name , createdAt and price

const cartProducts = [
    {id:1, name: 'laptop', price: 1000, creatAt: new Date('2021-09-01') },
    {id:2, name: 'desktop', price: 1500, creatAt: new Date('2021-09-02') },
    { id:3, name: 'phone', price: 500, creatAt: new Date('2021-09-03') },
    { id:4, name: 'tablet', price: 2000, creatAt: new Date('2021-09-04') },
    { id:5, name: 'watch', price: 2500, creatAt: new Date('2021-09-05') }

   ]














// /* ---------- Task 1 : Filtering ---------- */

const numbers = [10, 13, 20, 25, 38, 35, 40];

const firstFilter = numbers.filter(num => num >= 25); // create a new array with elements that are greater than or equal to 25.
console.log(firstFilter);


const secondFilter = numbers.filter(num => num % 5 == 0); // create a new array with elements that are divisible by 5.
console.log(secondFilter);

/* ---------- Task 2 : Mapping ---------- */

const squareArray = numbers.map(num => num ** 2); // create a new array with elements that are squared.
console.log(squareArray);

const multipliedArray = numbers.map(num => num * 2); // create a new array with elements that are multiplied by 2.
console.log(multipliedArray);


// // /* ---------- Task 3 : Filtering && Mapping ---------- */

const theArray = numbers.filter(num => num >= 20); // create a new array with elements that are greater than or equal to 20.
const fistArray = theArray.map(num => num ** 2);  // create a the previous array with elements that are divisible by 2.
console.log(fistArray);

// // anther way to write the code

const secondArray = numbers.filter(num => num %5 == 0).map(num => num * 3);
// create a new array with elements that are divisible by 5 
//then appling a new method .map to create the previous array with elements that are divisible by 3.
console.log(secondArray);

/* ---------- Task 4 : Extra ---------- */

const logger = function (array) {
    return array.forEach(num => console.log(num)); // print all elements of the current array.
}
logger(numbers);


const toCelsius = function (temperatures) {
    return temperatures.map(num => (num - 32) * (5 / 9)); // convert all elements from F to C.
}
console.log(toCelsius(numbers));


const hottestDays = function (temperatures,threshhold) {
    return temperatures.filter(num => num >= threshhold); // print the temp that exceed the threshhold.
}
console.log(hottestDays(numbers,25));


const logHottestDays = function (temperatures, threshholdTemp){
    const newArray = toCelsius(temperatures); // convert the array from F to C.
    const threshhold = (threshholdTemp - 32) * (5 / 9); // convert the threshhold from F to C.
    return hottestDays(newArray,threshhold); // take all tempretures that exceed the threshhold.
}
console.log(logHottestDays(numbers, 25));
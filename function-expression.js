// Mike Jenkins
// 04 APR 20XX
// JS Function Expression Example

// Assign function add to a variable named calcSum
const calcSum = function(num1, num2){
    return num1 + num2;
}

// Find the sum by calling the function
// Result of calculation is returned from the function and
// stored in a new variable named answer
const answer = calcSum(12, 5);
// Option 1
// Displaying the result of the calculation in the browser console
console.log(`(Option 1): The sum is: ${answer}`);
// Option 2
// Calling the function calcSum from within the template string
console.log(`(Option 2): The sum is: ${calcSum(20, 4)}`);
// Calling the function calcSum from within the template string
const firstNum = 20;
const secondNum = 4;
console.log(`(Option 3): The sum is: ${calcSum(firstNum, secondNum)}`);


// My answers
// Traditional functions rewritten as function expressions

// function welcomeUser (fName) {
//     // Welcome the user by their first name
//     return `Welcome to Career Tech, ${fName}!`;
// }
// // Call the welcomeUser function and use the alert ( ) method to display the welcome message in an alert box
// const firstName = 'Joshua';
// alert(welcomeUser(firstName));

// Rewritten as a function expression

const welcomeUser = function(fName){
      // Welcome the user by their first name
      return `Welcome to Career Tech, ${fName}!`;
}

console.log(welcomeUser('Katelyn'));

const myFirstName = 'Katelyn';
console.log(welcomeUser(myFirstName));

function showBiography (fName, lName, userAge) {
    // Build a template string containing the user's full name and age
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
// Call the showBiography function and display the info
// about the user in the browser console
const firstName = 'Tania';
const lastName = 'Rascia';
const age = 24;
console.log(showBiography(firstName, lastName, age));


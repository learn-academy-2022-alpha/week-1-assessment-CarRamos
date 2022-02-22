// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Ok, so im adding a iteration to find out the length of both elements and giving one direction and implying the other with a else statement. Easy because theres only two options 

if (fruit1.length>fruit2.length){
     console.log(fruit1)
 } else {
        console.log(fruit2)
}




// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

if (fruit3.length>fruit4.length){
    console.log(fruit3)
} else {
       console.log(fruit4)
}

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// i need to set up a hierarchy or decision tree that goes through the different variables and places them into three different catagories 

if (i=() => 212){
    console.log(`${temp1}, is above boiling point`)
} else if (
    i == 212 
 ) console.log(`${temp1}, " is at boiling point"`)
  else  (
        (i  >43) (
            console.log (`${temp1}, " is below boiling point"`)
        )
 )


console.log(temp1.i, temp2.i, temp3.i)

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// need to concat these two to make one array then count the index

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let numbs = myNumbers1.concat(myNumbers2)
console.log (numbs.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

// set up a function to break all the characters into individual elements then reverse them before i rejoin them

const currentCohort = "Alpha 2022"
function reverseString(s){
    return s.split("").reverse().join("");
}

console.log (reverseString(currentCohort))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// add a for process to evaluate each element and log whether odd or even using a remainder operator 

const myArray = [13, 34, 5, 10, 27, 42]
for (let i=1; i <=myArray.length; i++){
    if(
        [i] %2 !== 0){
        console.log("odd")
    } else  {console.log("even")
    } 
}

console.log(myArray.i)


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// add a function that allows for two variables add identifies the larger of the two with a if statement then logs the subtractions of the smaller variable in the log

const theSubtract = (num1, num2) => {
if (num1>num2){
    console.log(num1-num2)
} else if (num1<num2){
    console.log(num2-num1)
}
} 
console.log (number1,number2.theSubtract)

// if (number1>number2){
//     console.log(number1-number2)
// } else {
//     console.log(number2-number1)
// }

// if (number3>number4){
//     console.log(number3-number4)
// } else {
//     console.log(number4-number3)
// }
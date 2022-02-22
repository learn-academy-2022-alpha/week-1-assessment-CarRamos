// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 4
// b) Verify and explain: 5, the push command added it to the array and gave back the index of the new element. I thought we started at zero, guess not


// --------------------1) What will this log?

const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 10. Idk why, i thought we started at zero?


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o 
// b) Verify and explain: Aye! got that one right. I returned the value of the 4th index element 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: JavaScript
// b) Verify and explain: Ruby, I guess we are back to starting at zero for lists? 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: It comes back a error because you can toUpperCase a sting but not a array 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 2
// b) Verify and explain: it came back as number because the operator typeof returns the type of variable when called

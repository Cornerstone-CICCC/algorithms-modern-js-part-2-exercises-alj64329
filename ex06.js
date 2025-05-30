// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const arr = [-5, 8, -691, -59, 22, 43]

const positiveNum = (element) => element > 0

console.log(arr.every(positiveNum))
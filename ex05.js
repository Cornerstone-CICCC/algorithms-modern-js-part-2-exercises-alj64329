// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const arr = [5, 8, 691, 59, 22, 43]

const even = (element) => element % 2 === 0

console.log(arr.some(even))
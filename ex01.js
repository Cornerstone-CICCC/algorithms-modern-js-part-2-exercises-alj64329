// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. 
// Write the code to sort this array in ascending order.

const arr = [5, 8, 691, 59, 22, 43]

console.log(arr.sort((a, b) => a > b ? 1 : -1))
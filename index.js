const numbers = [1,3,4,[6, 8, 9]]
const testNum = { ...numbers }
numbers[3][1]= 22;
console.log(testNum)
console.log(numbers)
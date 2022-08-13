//shallow cloning using spread operator
const numbers = [1,3,4,[6, 8, 9]]
const testNum = { ...numbers }
numbers[3][1]= 22;
numbers[2]=44;
console.log(testNum)
console.log(numbers)
//deep cloning using JSON parse
const test = { name: "Juhaina", age: 25, hobbies: ["Cooking", "Playing"] }
const parse = JSON.parse(JSON.stringify(test))
test.hobbies[0] = "Reading"
console.log(test.hobbies)
console.log(parse.hobbies)
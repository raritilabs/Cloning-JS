//shallow cloning using spread operator
const numbers = [1,3,4,[6, 8, 9]]
const testNum = { ...numbers }
numbers[3][1]= 22;
numbers[2]=44;
console.log(testNum)
console.log(numbers)
//shallow cloning using object.assign()
const objClon = [1, 2, 4, 5, [6,7]]
const ObjCloneto = Object.assign({}, objClon)
objClon[1] = 45
objClon[4][1] = 67
console.log(objClon)
console.log(ObjCloneto)
//deep cloning using JSON parse
const test = { name: "Juhaina", age: 25, hobbies: ["Cooking", "Playing"] }
const parse = JSON.parse(JSON.stringify(test))
test.hobbies[0] = "Reading"
console.log(test.hobbies)
console.log(parse.hobbies)
//deep cloning using structured clone

//this operator
let student = {
    Name: "Juhaina",
    Adddress: "Calicut",
    id: 5566,
      console.log(this.Name + " " + this.Adddress);

  };
 
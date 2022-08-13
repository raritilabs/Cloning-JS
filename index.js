//Clone an object in JavaScript
//Using spread operator-shallow copy

const data = { name: "nasheeda", gender: "female", age: 21 };
const dataCopy = { ...data };
data.age = 25;
console.log(data.age);
console.log(dataCopy.age);

//In the case of nested object

const data1 = { name: "nasheeda", gender: "female", age: 21, hobbies:["Cricket","Reading","Singing"] };
const dataCopy1 = { ...data1 };
data1.hobbies[2] = "Badminton";
console.log(data1);
console.log(dataCopy1); 

//Using Object.assign() function-shallow copy

const data2 = { name: "nasheeda", gender: "female", age: 21 };
const dataCopy2 = Object.assign({},data2);
data2.name = "parvi";
console.log(data2);
console.log(dataCopy2);

//Use JSON Parsing - deep copy

const data3 = { name: "nasheeda", gender: "female", age: 21 };
const dataCopy3 = JSON.parse(JSON.stringify(data3));
data3.age=20;
console.log(data3);
console.log(dataCopy3);

//In the case of nested child

const data4 = { name: "nasheeda", age: 21, hobbies: ["Cricket", "Reading", "Playing"] };
const dataCopy4 = JSON.parse(JSON.stringify(data4));
data4.hobbies[1] = "Cycling";
console.log(data4.hobbies);
console.log(dataCopy4.hobbies);

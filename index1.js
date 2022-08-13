//this operator refers to an object
let employee = {
    name: "Parvi",
    age: 21,
    id: 2173,
    location: "Malappuram",
    details: function(){
        console.log(this.name + " is from " + this.location);

    }
  }
  employee.details()

//bind() method in Js

let employee2 = {
    name: "Junu",
    age: 25,
    id: 2171,
    location: "Calicut"
}
let result = employee.details.bind(employee2);
result()

//apply() method in Js

let employee3 = {
    name: "Aftab",
    age: 28,
    id: 2172,
    location: "Kannur"

}
let result1 = employee.details.apply(employee3);
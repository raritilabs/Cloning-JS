//this operator
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
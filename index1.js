function doSomething(a, b) {
     this.propone = "Hai juhaina!!!!!!"; 
 }
doSomething(); 
console.log(propone);
//new
let info = {
    name : "Juhaina",
    age : 25,
    Details : function() {
        console.log(this.name + " is " + this.age + " years old ");  //"This" keyword refers to an object
    }
}

  //bind function for using function from another object
  const student2 = {
    name: "Jimmy ",
    age: " 6",
  };
  const student3 = {
    name: "Jani ",
    age: " 16",
  };
  

  let result= info.Details.bind(student3);
  result();
  
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  //using of apply function
  const person1 = {
    name:"John",
    age: 8
  }
  
let result2=info.Details.apply(person1);



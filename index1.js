function doSomething(a, b) {
     this.propone = "Hai juhaina!!!!!!"; 
 }
doSomething(); 
console.log(propone);
let info = {
    name : "Juhaina",
    age : 25,
    Details : function() {
        console.log(this.name + " is " + this.age + " years old ");  //"This" keyword refers to an object
    }
}
   // logs John is 31 years old
   info.Details() 
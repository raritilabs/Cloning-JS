setTimeout(()=>
    {
        console.log("Hai Juhaina!!!")
     }, 1000);
     console.log("How are you")   //this will print "How are you" rather than printing "Hai Juhaina". So in order to solve that we have to use the promise feauture in JS
//about promise in Javascript
new Promise((res, rej)=>{
    setTimeout(()=>
    {
        console.log("Hai Juhaina");  res();
     }, 1000);

}).then(()=>{
    console.log("How are you")
})
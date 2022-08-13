

setTimeout( () => {
    console.log("Hey you");
},1000);
console.log("Parvi"); //this code will first print "Parvi" and then after 1ms "Hey you"
//If we turn the timeout into 0sec still it first prints the word "Parvi" and then "Hey you".
//To solve this we use "Promise".

new Promise((resolve,reject) => {
    setTimeout( () => {
        console.log("Hey you");
        resolve();
    },1000);
    
})
.then(() =>
{
    console.log("Parvi");
}); //this code will first print "Hey you" and then after 1ms "Parvi".Even if we turn the timeout value into 0 sec, it will print as mentioned before.
new Promise((resolve,reject) => {
    setTimeout( () => {
        console.log("Hey you");
        resolve();
    },0);
    
})
.then(() =>
{
    console.log("Parvi");
});
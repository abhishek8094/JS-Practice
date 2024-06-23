//   diff b/w deep copy and shallow copy 

const originalObj = {
   name : "Abhishek",
   age:20,
   address:{
    city: "Deoria",
    country: "India"
   }
}

//shallow copy using Object.assign() 
const shallowCopy = Object.assign({},originalObj);
shallowCopy.address.city = "Mumbai";

console.log(shallowCopy.address.city); //output :Mumbai
console.log(originalObj.address.city); //Output :Mumbai


//deep copy using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.address.city = "Lucknow",

console.log(originalObj.address.city); //Output : Mumbai
console.log(deepCopy.address.city); //Output : Lucknow

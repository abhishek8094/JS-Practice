//check the property exists in object ?

var person = {
    name: "Abhishek",
    city: "deoria",
}

// Using in operator
console.log("city" in person);
console.log("state" in person); 

//using the hasOwnProperty
console.log(person.hasOwnProperty("name"));
console.log(person.hasownProperty("city"));

//comparing the undefined
console.log(person.city !== undefined);
console.log(person.state !== undefined);
// clone or copy an object 

const originalObj = {
    name:"Abhishek",
    city:"deoria",
    age :22
}

// there are 3 ways to cloning  an object 

// using spread operator (Shallow copy)
const cloneObj = {...originalObj};
console.log(cloneObj);

//using Object.assign() (shallow copy)
// parameter is target, source
const cloneObj = Object.assign({}, originalObj);
console.log(cloneObj);

//using json.parse() & json.stringify() (deep copy)
const cloneObj = JSON.parse(JSON.stringify(originalObj));
console.log(cloneObj);

 
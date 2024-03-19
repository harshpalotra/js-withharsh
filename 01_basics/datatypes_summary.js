//primitive

// 7 types : string , number, boolean, null, undefined, symbol
//Bigint


const score = 100
const scoreValue = 111.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);


// reference (non primitive)

// array, objects, functions
const heros = ['shaktiman' , 'naagraj' ,'doga'];
let myObj = {
    name : 'hitesh',
    age :22,
}
console.log(myObj);
const myFunction = function(){
    console.log("Hello world");
}


//stack (primitive) , Heap(Non-Primitive)
let myname = "palotraharsh"
let anothername = myname
anothername = "chaiwithharsh"
console.log(anothername);
console.log(myname);

let userOne = {
    email : "user@goole.com",
    upi :"user@ibl"
}

let userTwo = userOne
userTwo.email = "palotraharsh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
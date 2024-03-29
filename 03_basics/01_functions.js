function sayMyName(){
console.log("H");
console.log("a");
console.log("r");
console.log("s");
console.log("h");
}

//sayMyName()

function addTwonNumbers(n1,n2){
    let result = n1+n2
    console.log("harsh");
    return  result 
}
addTwonNumbers(3,"4")

// const result = addTwonNumbers(3,5)

// console.log("Result:" , result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harsh"))
// console.log(loginUserMessage())

// rest operator ...
function calculateCarPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCarPrice(100,200,2000))

const user = {
    username : "Harsh",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username : "sam" ,
    price : 399
})

const myNewArray = [200,500,1000,6000]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray))
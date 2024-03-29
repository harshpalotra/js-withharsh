const user = {
    username : "harsh",
    price : 999,

    welcomeMessage: function(){
    
        console.log(`${this.username} , welcome to website`);
        //here this is refer to current contant
       // console.log(this)
    }
    
}
user.welcomeMessage()
user.username = "manish"
user.welcomeMessage()
console.log(this)
// 

// function chai(){
//     let username = "harsh"
//     console.log(this.username);
// }
// chai()
// const chai = function(){
//     let username = "harsh"
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "harsh"
//     console.log(this)

// }

// // arrow function syantax
// () => {}

// const addTwo = (num1, num2) => {
//     return num1 +num2
// }

// const addTwo = (num1 , num2) => (num1 +num2)

const addTwo = (num1 , num2) => ({username : "harsh"})
console.log(addTwo(3,4))

const myArray = [2,5,6,8,9]
myArray
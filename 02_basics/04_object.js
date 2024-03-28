//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123avc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    email : "som@gmail.com",
    fullname: {
        userfullname: {
            firstname: "harsh",
            lastname : "Palotra"
        }
    }

}

 //console.log(regularUser.fullname.userfullname.firstname);


 const obj1 = {1:"a" , 2 : "b"}
 const obj2 = {3:"c" , 4 : "d"}

 //const obj3 = {...obj1 , ...obj2}
 const obj3 = Object.assign({}, obj1,obj2)
 console.log(obj3);

//  console.log(tinderUser);
//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename: "js in hindi",
    price  : "999",
    courseInstuctor : "hitesh"
 }

 //course.courseInstructor
 const {courseInstuctor: Instructor} = course

 console.log(Instructor);
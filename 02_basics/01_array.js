const myArr = [1,2,3,4,5]
const myHeroes = ['shaktiman' , 'naagraj']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);


//array methods
myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof myArr);

//slice splice

const myn1 = myArr.slice(0,2)

console.log(myn1);

console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log("c" , myArr);
console.log(myn2);
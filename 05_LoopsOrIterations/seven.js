const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = myNumber.map((num1)=>{
//     return num1 + 10
// })
// console.log(result);
// console.log(myNumber());

// Chaining

const newNums = myNumber.map( (num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(newNums);

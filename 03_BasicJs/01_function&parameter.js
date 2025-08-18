function sayMyName(){
    console.log("Zavyar");
}

// console.log(sayMyName());

// function sum(num1, num2){
//     let result = num1 + num2;
//     console.log("My Name Is Zavyar Tajdar And My Is ");
    
//     return result
// }

// function sum(num1, num2){
//     let result = num1 + num2;
//     let result2 = num1 * num2;
//     console.log(result);
//     console.log(result2);
// }
// let result = sum(10, 9)
// console.log(result);


function logginUser(username){ 
    if (!username) { // or  if(username === undefined)
        console.log("Please Enter UserName!");
        return
        
    }
    return `${username} just logged in`
}

// console.log(logginUser("Zavyar"));
// console.log(logginUser());

function calculateTotalCartPrice(val1, val2, ...num1){ // '...' rest operator
    return num1
}

// console.log(calculateTotalCartPrice(200, 440, 660, 2200));

let user = {
    name: "Zavyar", 
    age: 19,
}

function handleObject(anyObject){
    console.log(`Username Is ${user.name} and Age Is ${user.age}`);
    return
}

// console.log(handleObject(user));
handleObject({
    name: "Zavyar",
    age: 19
})

const newArray = [200, 212, 323, 421, 421, 444]

function retrurn2ndVal(GetArray){
    return GetArray[1]
}

console.log(retrurn2ndVal(newArray));


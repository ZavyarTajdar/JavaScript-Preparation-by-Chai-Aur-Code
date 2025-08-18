// Singleton

// object.create

// Object Literal

const mySym1 = Symbol("key1")

let jsUser = {
    name: 'Zavyar Tajdar',
    age: 18,
    occupation: 'Software Developer',
    [mySym1]: "This is a symbol",
    Salary : 50000,
    isLoggedIn : true,
    lastLogginDays : ["Monday", "Sunday"]
}

// console.log(jsUser.name);
// console.log(jsUser["Salary"]);
// console.log(jsUser[mySym1]);
// console.log(jsUser);


jsUser.Salary = 70000;
// console.log(jsUser.Salary);
// Object.freeze(jsUser)
jsUser.age = 19;
// console.log(jsUser.age);

jsUser.greeting = function(){
    console.log("Hello, I am Zavyar Tajdar");
} 

jsUser.greeting_two = function(){
    console.log(`Hello, JS User, ${this.name}`);
    console.log(`Hey, My Salary Is, ${this.Salary}`);

}
console.log(jsUser.greeting());
console.log(jsUser.greeting_two());
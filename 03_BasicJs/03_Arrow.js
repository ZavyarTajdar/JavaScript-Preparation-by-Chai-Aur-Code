const user = {
    username: "Zavyar",
    price: 999,


    welcomeMsg : function () {
        console.log(`Welcome, ${this.username}!` ); // 'this' refers to current context
        console.log(this);
        
    }

}

// user.welcomeMsg()
// user.username = "Zavi"
// user.welcomeMsg()
// console.log(this);

// function chai (){
//     let name = "Zavi"
//     console.log(this.name);
// }
// chai()

// const chai = function (){
//     let name = "Zavi"
//     console.log(this.name);
    
// 

const chai =  () => {
    let name = "Zavi"
    console.log(this);
    
}
// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => {username : "Zavyar"}
const addTwo = (num1, num2) => ({username : "Zavyar"})



// console.log(addTwo(3,3));


// const myArray = [2,4,5,1,4]

// myArray.forEach(() => ())
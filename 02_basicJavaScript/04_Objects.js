// Singleton

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.name = "Zavyar"
tinderUser.age = 25
tinderUser.gender = "male"
tinderUser.location = "New York"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const instaUser = {
    fullName : {
        UserFullName : {
            firstName : "Zavyar",
            LastName : "Tajdar",
        }
    },
    age: 25,
    email : "zavyar.tajdar100@gmail.com"
}
// console.log(instaUser.fullName.UserFullName.firstName);


const Object1 = {1: "a", 2: "b"}
const Object2 = {3: "a", 4: "b"}

// const Object3 = { Object1, Object2}
// const Object3 = Object.assign({},Object1,Object2)
const Object3 = { ...Object1, ...Object2 } // Best Way
// console.log(Object3);

const User = [
    {name: "Zavyar",
     age: 19,
     gmail : "zavyar122@Object1.google.com"    
       },
    {name: "Taha",
     age: 25,
     gmail : "taha122@Object1.google.com"    
       },
    {name: "Talha",
     age: 23,
     gmail : "Talha122@Object1.google.com"    
       },   
    {name: "Umair",
     age: 21,
     gmail : "Umair122@Object1.google.com"    
       },   
    {name: "Uzair",
     age: 20,
     gmail : "Uzair122@Object1.google.com"    
       },            
]

// console.log(User[0].name , User[1].name , User[2].name , User[3].name , User[4].name ,);
/*console.log(`${User[0].name} Is backend Programmer, ${User[1].name} Is Banker, ${User[2].name} Is SuperVisor, 
 ${User[3].name} Is Also Banker(Cashier),${User[4].name} Is Frontend Programmer, `);*/

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggedI'));


const course = {
    name: "JavaScript",
    price: 100,
    isFree: false,
    isPaid: true,
    teacher : "Hitesh"
}

// course.teacher

// const {teacher, name : n, price} = course
// console.log(teacher, n, price);

// {
//     "name" : "Zavyar",
//     "courseName" : "Js In Hindi",
//     "coursePrice" : 1000,
// }

// [
//     {"name" : "Zavyar",
//      "courseName" : "Js In Hindi",
//      "coursePrice" : 1000,},
//     {"name" : "Zavyar",
//      "courseName" : "Js In Hindi",
//      "coursePrice" : 1000,},
//     {"name" : "Zavyar",
//      "courseName" : "Js In Hindi",
//      "coursePrice" : 1000,},
//     {"name" : "Zavyar",
//      "courseName" : "Js In Hindi",
//      "coursePrice" : 1000,},   
// ]
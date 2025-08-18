// Immediately Invoked Function Expression(IIFE)

// (function chai(){ // Named IIFE
//     console.log(`DB Connected 1`);
    
// })();

// // IIFE, when we face problem due to global scope pollution, iife is used to ignore the declaration and varaible
// (() =>{ // UnNamed IIFE
//     console.log(`DB Connected 2`);
// })();

// ((name) =>{
//     console.log(`DB Connected 3, Sir ${name} `);
// })("Zavyar");

// ((num1, num2) =>{
//     console.log(num1 * num2);
// })(3,4);

// *********************** Self Practice *************************

// const caluclate_percentage = (val1 , value2) =>{
//     return (val1/value2)*100;
// }
// console.log(caluclate_percentage(849, 1200));

// ((val1, val2) => {
//     let result = (val1/val2)*100
//     console.log(result);
//     return;
    
// })(842, 1200);

// (function caluclate_percentage(val1, val2) {
//     let result = (val1/val2)*100;
//     console.log(result);
//     return;
// })(842, 1200);

// ((first_range, second_range)=>{
//     let dice = Math.random
//     console.log(Math.floor(dice()* ( second_range - first_range + 1)) + first_range)
// })(1, 6);

const User_Information = () =>{
    let first_floor_User_List = [
        
        {
            "name": "Zavyar",
            "age": 19,
            "city": "Lahore",
            "Salary": 170000,
        },

        {
            "name": "Safah",
            "age": 18,
            "city": "Lahore",
            "Salary": 80000,
        },

        {
            "name": "Ali",
            "age": 17,
            "city": "Islamabad",
            "Salary": 90000,
        },

    ];

        let second_floor_User_List = [
        
        {
            "name": "Taha",
            "age": 19,
            "city": "Lahore",
            "Salary": 170000,
        },

        {
            "name": "Talha",
            "age": 18,
            "city": "Lahore",
            "Salary": 80000,
        },

        {
            "name": "Umair",
            "age": 17,
            "city": "Islamabad",
            "Salary": 90000,
        },

    ];

        let third_floor_User_List = [
        
        {
            "name": "Uzair",
            "age": 19,
            "city": "Lahore",
            "Salary": 170000,
        },

        {
            "name": "Ayan",
            "age": 18,
            "city": "Lahore",
            "Salary": 80000,
        },

        {
            "name": "Basit",
            "age": 17,
            "city": "Islamabad",
            "Salary": 90000,
        },

    ];
    return {first_floor_User_List,
    second_floor_User_List,
    third_floor_User_List};
}

// console.log(User_Information());
const data = User_Information();
console.log(data.first_floor_User_List[1]);
console.log(data.second_floor_User_List[1]);
console.log(data.third_floor_User_List[1]);

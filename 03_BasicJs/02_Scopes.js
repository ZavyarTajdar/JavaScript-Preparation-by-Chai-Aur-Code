// var c = 300;
// let a = 300
// if () {
//     let a = 10;
//     const b = 20; 
//     // console.log(a); // 10
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one (){ // Parents/Childs Concept , Child can take value from parents but parents can't
    const username = "Zavyar"

    function two(){
        const password = "123456"
        console.log(username);

        function three(){

            const secret = "I am a secret"
            console.log(password);
            
        }
        three();
    }
    two()
}

// one()

// if (true) {
//     const username = "zavyar"
//     if (username === "zavyar") {
//         const youtube = "ZavyarTajdar"
//         console.log("username is zavyar");
        
//     }
//     console.log(username);
    
// }

//*********************************** Interesting ************************ */

function add1(num1){
    return num1 + 1;
}

console.log(add1(68));


const addTwo = function add2(num1){
    return num1 + 2
}

console.log(addTwo(2));
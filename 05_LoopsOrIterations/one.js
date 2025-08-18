// for (let i = 1; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`You have reached at 5`);

//     }
//     console.log(element);

// }

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     // console.log(`outer loop ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         const elemen = j;
//         // console.log(`inner loop ${j}`);
//         // console.log(i + " * " + j + " = " + i*j);
//     }
// }

// let MyArray = ["Flash", "Superman", "Ironman"]

// for (let index = 0; index < MyArray.length; index++) {
//     const element = MyArray[index];
//     console.log(element);
// }

// Break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 Is Detected`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
    
// }


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 Is Detected`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
    
}
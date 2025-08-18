// // const email = "Zavyar@gmail.com"
// const email = []


// if (email) {
//     console.log(`User Got Email!`);
// }
// else {
//     console.log(`don't have email`);

// }

// Falsy Value

// false, 0, -0, BigInt, 0n, null, undefined, NaN, "" 

// Truthy Value
// "0", "false", "  ", { }, [ ], function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

//*********************************************************** */

// nullish coalescing operator (??) : null, Undefined

let val1;
// val1 = 5 ?? 10; 
// val1 = null ?? 10; 
// val1 = undefined ?? 10; 
// val1 = null ?? 10 ?? 15;
// val1 = null ?? null ?? 15;
// val1 = null ?? undefined ?? 15;
console.log(val1);

// Terniary 

// condition ? true : false

const ice_tea_price = 8
ice_tea_price >= 100 ? console.log(`I can buy`) : console.log(`I Can't Buy, Mai Gareeb Hu`);
 

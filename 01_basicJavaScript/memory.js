// there are 2 types of memory: Stack (Primitive) , Heap Memory (Non-Primitive).

// let insta_name = "iamzavyartajdar"
// let another_insta_name = insta_name;
// another_insta_name = "zavyar_tajdar"
// console.log(another_insta_name);

let userOne = {
    email : "zavyartajdar100@gmail.com",
    nayapay : "Zavitajdar",
}

let userTwo = userOne;
userTwo.email = "xavi@google.com"
console.log(userOne.email);

// In stack memory, the original data doesn't change , instead it create a new copy.

// in heap memory the orignial data change
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// const Total = myNums.reduce((acc, currVal) => {
//     console.log(`acc val is ${acc} and ${currVal}`);
    
//     return acc + currVal
// }, 0)

// console.log(Total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const MyTotal = shoppingCart.reduce( (acc, currVal) => {
    return acc + currVal.price
}, 0)
console.log(MyTotal);
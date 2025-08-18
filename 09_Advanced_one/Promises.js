const promiseOne = new Promise((resolve, reject) => {
    // Do an Async task 
    // DB call, CryptoGraphy, network
    setTimeout(() => {
        console.log(`Asyn task is complete`);
        resolve()
    }, 1000)

})

promiseOne.then(() => {
    console.log(`Promise consumed`);

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'John',
            age: 30,
            salary: 50000,
        })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);

})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'Johnnah', password: 123 })
        } else {
            reject('ERROR: Something Went Wrong')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log(`The Promise is either resolve or rejected`);
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'javaScript', password: 123 })
        } else {
            reject('ERROR: Js Went Wrong')
        }

    }, 1000)
})

async function consumedPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumedPromiseFive()

fetch('https://api.github.com/users/zavyartajdar')
    .then((response) => {
        return response.json()
    })
    .then((data)=>{
        console.log(data);

    })
    .catch((error)=>{
        console.log(error);
    })

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
const user = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
    },
    getUserDetail: function(){
        console.log(this.name);
    }
}
// console.log(user.address);
// console.log(user.getUserDetail());
// console.log(this);

// const promiseOne = new Promise((resolve,reject), =>{

// })

function User(username, isloggedin, Entry){
    this.username = username,
    this.isloggedin = isloggedin,
    this.Entry = Entry
    return this;
}
const userOne = new User('Zavyar','true', 'false')
const Usertwo = new User('Tajdar','false', 'false')

console.log(userOne.construtor);
// console.log(Usertwo);
// 'New' keyword is mendatory if its group project and can cause overwrite the value 
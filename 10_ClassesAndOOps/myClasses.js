// ES6

class User {
    constructor(Username, email, password) {
        this.Username = Username;
        this.email = email;
        this.password = password;
    }
    encryptpassword(){
        return this.password = this.password.split('').map(c => '*').join('');
    }
    changeUserName(){
        return `${this.Username.toUpperCase()}`
    }
}

const zavi = new User("Zavyar Tajdar",'Zavyar@gmail.com', "123")
console.log(zavi.encryptpassword());
console.log(zavi.changeUserName());

//Behind The Scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
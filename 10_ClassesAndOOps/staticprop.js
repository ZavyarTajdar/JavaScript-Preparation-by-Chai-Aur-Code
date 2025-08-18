class user {
    constructor(Username) {
        this.Username = Username;
    }
    logMe(){
        console.log(`Username : ${this.Username}`);
        
    }

    static createId(){
        return `123`
    }
}

const Zavyar = new user('Zavyar')
Zavyar.logMe()
// console.log(Zavyar.createId());

class Teacher extends user{
    constructor(Username,email){
        super(Username)
        this.email = email
    }

}
const iphone = new Teacher('17 Pro Max', "Apple@google.com")
console.log(iphone.createId());

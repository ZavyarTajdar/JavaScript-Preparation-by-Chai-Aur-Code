class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email(){
        return `Zavyar*******.com`
    }
    set email(value){
        this._email = value
    }
            
}
const zavi = new user('Zavyar@gmail.com', '786')
console.log(zavi.email)
function SetUsername(Username){
    this.Username = Username
    
}
function createUser(email,password,Username ){
    SetUsername.call(this, Username)
    this.email = email
    this.password = password
}

const chai = new createUser('zavyar.tajdar@gmail.com', 123, 'Zavyar tajdar')
console.log(chai)
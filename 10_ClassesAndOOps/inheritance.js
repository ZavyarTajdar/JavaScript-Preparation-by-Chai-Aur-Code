class user {
    constructor(Username) {
        this.Username = Username;
    }
    logMe(){
        console.log(`UserName Is : ${this.Username}`);
    }

}

class Teacher extends user{
    constructor(Username, Subject, password) {
        super(Username);
        this.Subject = Subject;
        this.password = password;
        //begin{pre}
    }

    addCourses(){
        console.log(`Subject Is : ${this.Subject} `);
    }
}

const Zavi = new Teacher('Zavyar Tajdar', 'Zavyartajdar@gmail.com', 123)
console.log(Zavi);

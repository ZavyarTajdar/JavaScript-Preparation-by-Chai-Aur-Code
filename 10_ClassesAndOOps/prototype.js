// let myName = 'Zavyar      '

// console.log(myName.truelength);

let Myheros = ['thor', ' spiderman', 'wanda']
const heropower = {
    thor : 'hammer',
    spider : 'web',
    wanda : 'red',
    
    Getspiderpower: function(){
        console.log(`Spiderman Pwer is ${this.spider}`);
        
    }
}
Object.prototype.zavyar = function(){
    console.log('Zavyar is here');
}
Myheros.zavyar()

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh        ".trueLength()
"iceTea         ".trueLength()
const marvel_heros = ["Thor", "Ironman", "Wanda"];
const dc_heros = ["Superman", "Batman", "Flash"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// let allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const allheros = [...marvel_heros,...dc_heros] //spread operator
// console.log(allheros);

const another_array = [1,3,4,5,[3,4,5],4,7,5,[8,4,0,[2,5]]];
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Zavyar"));
console.log(Array.from("Zavyar"));
console.log(Array.from({name: "Zavyar"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

let name1 = "Zavyar";
let name2 = "Tajdar";
let name3 = "Programmer";
console.log(Array.of(name1,name2,name3));
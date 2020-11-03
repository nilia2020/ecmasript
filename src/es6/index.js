function newFunction(name, age, country) {
    var name = name || "jorge";
    var age = age || 49;
    var country = country || "Argentina";
    console.log(name, age, country);
}
// es6
//Default param
function newFunction2(name = "jorge", age = 32, country = "Argentina") {
    console.log(name, age, country);
}
newFunction2();
newFunction2("Luz", 31, "España");
//Concatenación
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
//template literal
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilineas
let lorem = "Una frase en una linea \n" + "otra frase en otra linea.";
console.log(lorem);
//es6
let lorem2 = `Una frase en una linea
otra frase en otra linea`;
console.log(lorem2);

//Desestructuración
let person = {
    name: "Jorge",
    age: 49,
    country: "AR",
};
console.log(person.name, person.age, person.country);
//es6
let { name, age, country } = person;
console.log(name, age, country);
//Spread operator
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];
let education = ["David", ...team1, ...team2];

console.log(education);
//let sólo disponible en el scope. var es global.
{
    var globalVar = "global var";
}
{
    let globalLet = "global let";
    console.log(globalLet);
}
console.log(globalVar);
// const no me permite cambiar la variable
const a = "b";

//Objetos mejorados

let name = "jorge";
let age = 32;
//esc5
obj = { name: name, age: age };
//esc6
obj2 = { name, age };
console.log(obj2);

//arrow function esc6
const names = [
    { name: "Jorge", age: 49 },
    { name: "Yesica", age: 27 },
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});
//esc6
let listOfNames2 = names.map((item) => console.log(item.age));

/* const listOfNames3 = (name, age) => {
  ...
} */
const square = (num) => num * num;
console.log(square(5));

//Promesa con respuesta si resuelve o no resuelve
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("hey!");
        } else {
            reject("Ups!!");
        }
    });
};
helloPromise()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

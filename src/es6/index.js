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
newFunction2("Luz",  31, "España"));
//Concatenación
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
//template literal
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilineas
let lorem = "Una frase en una linea \n" + "otra frase en otra linea."
console.log(lorem);
//es6
let lorem2 = `Una frase en una linea
otra frase en otra linea`;
console.log(lorem2);

//Desestructuración
let person = {
  name : "Jorge",
  age : 49,
  country : "AR"
};            
console.log(person.name, person.age, person.country);
//es6
let { name, age, country } = person;
console.log(name, age, country);                
//Junio de 2019
// array flat nos permite aplanar arreglos

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

// array flatMap primero manipula la dato antes de aplanar. mapear cada elemento, luego pasarle una función y aplanar
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));
// trim recorta los espacios de un string
let hello = "                      hello world";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello world                  ";
console.log(hello);
console.log(hello.trimEnd());

// opcional catch biding
try {
} catch /*(error) ya no es necesario colocarlo*/ {
    error;
}
//-------------fromEntries----------------------/
// array to object
let entries = [
    ["name", "oscar"],
    ["age", 32],
];
console.log(Object.fromEntries(entries));

//-------------symbol object--------------------/
let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);

let b = "a";
let b = "b";
console.log(b);

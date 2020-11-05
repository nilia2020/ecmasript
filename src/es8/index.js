// Object entries. Devuelve valores y claves de una matriz

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
};
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values
const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
};
const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding

const string = "Hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(12, "-----"));

//tariling-comas
const obj = "Oscar",

// Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(()=> resolve("Hello World"), 3000)
      : reject(new Error("Test error"))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();

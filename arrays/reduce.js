"use strict";

// Reduce sirve para poder realizar la suma de valores de una manera mas rapida
const numeros = [1, 2, 3, 4, 5];
const arregloNumeros = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

//Suma con un metodo forEach
let sumaSimple = 0;
numeros.forEach((numero) => (sumaSimple += numero));
console.log("sumaSimple ", sumaSimple);

// Suma con metodo reduce
let reduceSimple = numeros.reduce((a, b) => a + b);
let reduceLargo = numeros.reduce((a, b) => {
  return a + b;
});
console.log("reduceSimple ", reduceSimple);
console.log("reduceLargo ", reduceLargo);

/* *****************Suma de datos dentro de un objeto 👇🏻**************************** */

// Suma con un metodo forEach
let sumaObjetos = 0;
arregloNumeros.forEach((arregloNumero) => (sumaObjetos += arregloNumero.id));
console.log("sumaObjetos ", sumaObjetos);

// Suma con un metodo reduce
let reduceObjetos = arregloNumeros.reduce((a, b) => {
  return a + b.id;
}, 0);
console.log("reduceObjetos ", reduceObjetos);

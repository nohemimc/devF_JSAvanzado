"use strict";

//IndexOf sirve para buscar un valor

let numeros = [1, 5, 3, 2, 4];

function encontrarValor(numero) {
  // Operador ternario
  // Sintaxis condicion ? valor : valor;
  // condicion ? si la condicion se cumple : condicion no se cumple;
  return numeros.indexOf(numero) > 0
    ? "Valor encontrado"
    : "El valor no esta en el array";
}
console.log(encontrarValor(8));

// Tambien sirve para encontrar valores sobre un string
let nombre = "Daniel";
console.log(nombre.indexOf("i"));

"use strict"

var datos = ["a", "b", "c", "d", "e"];

// Primer parametro hace referencia a donde comenzar a eliminar
// Segundo parametro hace referencia a cuantos va a eliminar hacia adelante
let eliminado = datos.splice(2, 2, "z", "x", "y");

// Si guardamos el resultado de splice nos guarda los valores eliminados no el arreglo final
// Para trabajar con el arreglo final o esperado debemos tomar el mismo arreglo al que se le aplico el splice
console.log(eliminado, datos);

var palabras = ["Carro", "Casa", "Avion", "bici", "Pasto"];
var valoresEliminados = palabras.splice(1, 2, "Mansion", "Perro", "Jamon", "Ola");
console.log('valoresEliminados ', valoresEliminados);
console.log('palabras ', palabras);


// Tambien existe replace para sustituir una palabra en un string
const frase = "Hola como estas!";
console.log(frase.replace('Hola', 'olo'));
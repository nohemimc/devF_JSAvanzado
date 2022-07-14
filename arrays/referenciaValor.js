"use strict";

let numero = 5;
let numero2 = numero;
numero = 10;
console.log("numero ", numero);
console.log("numero2 ", numero2);

// Tipos de datos que no son objetos o arreglos
let arreglo1 = [1, 2, 3];
let arreglo2 = arreglo1.map((dato) => dato);

arreglo2[0] = 10;
console.log("arreglo1 ", arreglo1);
console.log("arreglo2 ", arreglo2);

/* ************************************** */

let arregloObj1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
let arregloObj2 = arregloObj1.map((dato) => ({
  ...dato
}));

arregloObj2[0].id = 10;
console.log("arregloObj1 ", arregloObj1);
console.log("arregloObj2 ", arregloObj2);

/* ************************************** */

let objeto1 = {id: 5};
let objeto2 = {...objeto1};

objeto2.id = 10;
console.log('objeto1 ', objeto1);
console.log('objeto2 ', objeto2);

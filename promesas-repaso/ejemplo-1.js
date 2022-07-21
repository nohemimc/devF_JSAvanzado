"use strict"

let x = 10

//Se tienen que crear.
// Las promesas, tienen que ser puestas por escrito como un contrato
const promesa = new Promise((resolve, reject) => {
  if (x === 10) {
    return resolve("La promesa se cumpliò, x es igual a 10")
  }
  return reject("La promesa no se cumpliò, x no es igual a 10")
})

// manejar la respuesta de la promesa
// handler functions
promesa
  .then((response) => {
    console.log(response);
    return 18
  })
  .then(() => {
    console.log("soy el then, sin parametros");
    return 72
  })
  .then((response) => {
    let suma = response + 8
    console.log(suma);    
  })
  .catch((error) => {
    console.error(error);
  })

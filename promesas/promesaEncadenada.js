"use strict";

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 3 ? resolve(number) : reject("El numero es menor a 3");
  }, 1000);
});

function suma(numero1, numero2) {
  return numero1 + numero2
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2
}

promise
.then((numero) => {
  console.log(`El numero incial es ${numero}`);
  return suma(numero, 9);
})
.then((valorSumado) => {
  return multiplicacion(valorSumado, 10)
})
.then((valorMultiplicado) => {
  console.log(`Ultimos 3 numeros de la tarjeta.- ${valorMultiplicado}`);
})
.catch((error) => {
  console.log(error);
});

"use strict";

const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 5
      ? resolve(number)
      : reject(new Error(`Es menor a 5 el numero es.- ${number}`));
  }, 2000);
});

promesa
  .then((number) => console.log(number))
  .catch((error) => console.log(error.message)); 


//error.message -> Solo imprimer cuál fue el error, más no imprime dónde se encuentra

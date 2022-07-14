"use strict";

const url = "https://rickandmortyapi.com/api/character/3";

// request => peticion
// response => respuesta
function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      let nombre = document.getElementById("nombre");
      nombre.innerHTML = `El nombre del personaje es ${response.name}`;
      console.log(response);
    })
    .catch((error) => {
      console.log("error ", error);
    });
}

getData(url);

"use strict";

// require === importar
const XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;

let url1 = "https://pokeapi.co/api/v2/pokemon/pikachu";
let url2 = "https://rickandmortyapi.com/api/character/283";

function getData(url, callback) {
  let xhttp = new XMLHTTPRequest();

  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        callback("Algo salio mal", null)
      }
    }
  };

  xhttp.send();
}

getData(url1, (error, data) => {
  console.log('DATOS 1.- ', error, data);
});

getData(url2, (error, data) => {
  console.log('DATOS 2.- ', error, data);
});

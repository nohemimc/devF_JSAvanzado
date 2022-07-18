"use strict"

const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/3";

const promise = new Promise((resolve, reject) => {
  axios
    .get(url)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error.response.data);
    });
});

promise
  .then((response) => {
    console.log("response ", response);
  })
  .catch((error) => {
    console.log("error ", error);
  });

//Forma corta
// axios
//     .get(url)
//     .then((response) => {
//         console.log('response', response.data);
//     }).catch((error) => {
//         console.log('error', error.data);
//     })
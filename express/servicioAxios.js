"use strict";

const axios = require("axios");
const nombre = "Enrique";
const url = `http://localhost:3000/pokemon?nombre=${nombre}`;

axios
  .post(url)
  .then((response) => {
    console.log("response ", response.data);
  })
  .catch((error) => {
    console.log(error);
  });

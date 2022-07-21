"use strict";

const url = "http://localhost:3000/pokemon";

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("error ", error);
  });

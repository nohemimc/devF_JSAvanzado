"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.get("/pokemon", function (req, res) {
  const { nombre } = req.query;
  if (nombre) {
    //Has un filtro de valores con el nombre
    console.log("El nombre enviado es.- ", nombre);
  }
  res.send({l:"Metodo Get"});
});

app.post("/pokemon", function (req, res) {
  const nuevoPokemon = req.body
  console.log('nuevoPokemon ', nuevoPokemon);
  res.send("Metodo Post");
});

app.put("/pokemon", function (req, res) {
  res.send("Metodo Put");
});

app.delete("/pokemon", function (req, res) {
  res.send("Metodo Delete");
});

app.listen(3000);

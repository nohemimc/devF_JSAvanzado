"use strict"

// molde
class Animal {
  constructor(especie, sonido, color) {
    this.especie = especie,
    this.color = color,
    this.sonido = sonido
  }
  emitirSonido() {
   return console.log('Mi sonido es: ' + this.sonido); 
  }
}

const jirafa = new Animal("Jirafa", null, "amarillo")

console.log(jirafa.especie);
console.log(jirafa.color);

jirafa.emitirSonido()
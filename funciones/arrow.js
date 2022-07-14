//El objeto this, no existe en arrow functions
const saludar = () => {
    return console.log("Hola Mundo");
  }
  saludar()
  
  const sumar = (a, b) => a + b
  console.log(sumar(67, 9));
  console.log(sumar(18, 7));
  
  const saludar2 = nombre => `Hola, ${nombre}`
  console.log(saludar2("Pamela"));
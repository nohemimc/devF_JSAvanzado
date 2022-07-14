// Un callback. Es cuando una funcion de orden mayor recibe y ejecuta otra funcion que tiene como parametro
function ordenMayor(otraFuncion) {
  return otraFuncion()
}

// ejemplo 1. Calculadora
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b

const calculadora = (a1, b1, operacion) => operacion(a1, b1)

console.log(calculadora(5, 8, suma))
console.log(calculadora(18, 78, resta))
console.log(calculadora(7, 8, multiplicacion))
console.log(calculadora(10, 2, division))

//DESAFIO:
// Crear las demas operaciones, -, *, / y ejecutarlas con la calculadora como callbacks. Entregar la menor cantidad de codigo que puedan
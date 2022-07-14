function hola(nombre, callback) {
  setTimeout(() => {
    return callback(nombre)
  }, 1500);
}

hola("Samantha", (nombreParam) => {
  return console.log(`Hola, ${nombreParam}`)
})


//Desafìo. Crea una funcion y pasasela como parametro a hola, cuando la ejecutes
function saludar(nombreParam) {
  return console.log(`Hola, ${nombreParam}`)
}

hola("Floresita", saludar)
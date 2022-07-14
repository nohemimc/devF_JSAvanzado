const hola = (nombre, callback) => {
  setTimeout(() => {
    return callback(nombre)
  }, 1500);
}

const hablar = (mensaje, callback) => {
  setTimeout(() => {
    return callback(mensaje)
  }, 1100);
}

const adios = (nombre, callback) => {
  setTimeout(() => {
    return callback(nombre)
  }, 1000);
}

// CALLBACK HELL. Es recomendable, no tener màs de 3 callbacks...
hola("Samantha", (nombre) => {
  console.log("Hola " + nombre)

  return hablar("bla bla bla...", (mensaje) => {
    console.log(mensaje);

    return adios("Samantha", (nombre) => {
      return console.log("Adios " + nombre);
    })
  })
})
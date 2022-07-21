"use strict"

// *****************Forma larga*************************
// const getData = () => {
//   return fetch ('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//       return response.json()
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     })
// }
// getData()

// *****************Forma corta*************************
// const getData = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => console.error(error))
// }
// getData()

const getData = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      return data
    } catch (error) {
      console.error("Este es mi error: ", error);
    }
}

// flecha/arrow function
// const showData = async () => {
//   const data = await getData()
//   return console.log(data)
// }

//async y await SIEMPRE van juntos
//Sirve para esperar/await a que una promesa se resuelva y obtener los datos que retorna esa promesa
//Es una funcion que me permite trabajar asincronia, como sincronia
async function showData() {
  const data = await getData()
  return console.log(data)
}

//NOTA: En funciones constructoras, SIEMPRE se utiliza 'this'
showData()
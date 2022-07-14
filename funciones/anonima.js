//estructura de una funcion basica, anonima
// function () {
//     console.log('holi')
// }
  
  //estructura de una arrow anonima
  () => {
    console.log('Hola')
  }
  
  //========================================================
  //funciones anònimas autoejecutables/IIFE(Immediately invoked function expression). Siempre llevan ;
  (function () {
    console.log('holi')
  })();
  
  //estructura de una arrow IIFE
  (() => {
    console.log('Hola')
  })();
  
  //========================================================
  //¿Còmo trabajar con paràmetros?
  (function (a, b) {
    return console.log(a + b)
  })(23, 17);
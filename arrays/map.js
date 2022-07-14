"use stric";

// Map Sirve para iterar un arreglo y poder generar un arreglo automaticamente atravez de lo que retorna

const numeros = [1, 2, 3, 4, 5];
const nuevosNumeros = numeros.map((dato) => dato);
console.log("numeros ", numeros);
console.log("nuevosNumeros ", nuevosNumeros);

const personas = [
  { id: 1, nombre: "Sabina" },
  { id: 2, nombre: "Daniel" },
  { id: 3, nombre: "Flor" },
];

const datosPersonas1 = personas.map((dato) => {
  dato.mascota = "perro";
  if (dato.id == 2) dato.nombre = "Enrique";
  return dato;
});

const datosPersonas2 = personas.map((dato) => ({
  ...dato,
  arboles: "si",
}));

console.log("datosPersonas1 ", datosPersonas1);
console.log("datosPersonas2 ", datosPersonas2);

console.log("1");
console.log("2");

setTimeout(() => {
  return console.log("3");
}, 0);

for (let i = 0; i < 500; i++) {
  console.log(i);
}

console.log("Fin");
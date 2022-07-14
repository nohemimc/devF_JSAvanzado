console.log("2")
console.log("1")

setTimeout(() => {
  return console.log("3")
}, 3000)

setTimeout(() => {
  return console.log("4")
}, 4000)

console.log("5")
// Criando um prototype
console.log("Criando um prototype")

// Nos objetos
const address = {
  city: "São Paulo",
  country: "Brazil",
}

console.log(address)
// ele por si só tem um prototype, pode-se notar que vai abrindo + opções até chegar a null

// Nos arrays
const users = ["Rodrigo", "João", "Amanda"]
console.log(users)

//  Em uma string também
const userName = "Rodrigo Gonçalves"
console.log(userName.__proto__) // const.__proto__

/*

Prototype é a base de muita coisa é tipo um inspecionar de javascript no console!

*/
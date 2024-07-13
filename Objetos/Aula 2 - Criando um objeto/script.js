/* 
OBJETOS
- Uma coleção de dados e/ou funcionalidades;
- Podem ter propriedade3s e métodos;
*/

//  Cria um objeto vazio

const obj = {}
console.log(obj);
console.log (typeof obj);

//  Cria um objeto com propriedades e métodos, separamos tudo por virgula
const user = {
  email: "Rodrigo@gmail.com",
// Propriedade: valor 
  age: 18,
  name: {
    first_name: "Rodrigo",
    surname: "Gonçalves",
  }, // Um objeto dentro de outro obj. Propriedade composta: Vários valoeres 

  address: {
    street: "Rua X",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-323"
  },
// Em objetos é bom usar snake_case e camelCase para objetos 

//Criando um método  (função)
massage: () => {
  console.log("Oi rodrigo")
},

}

// Aula 03 - Como acessar os objetos 

// Acessando usando a Propriedades e métodos usando a notação de ponto.

console.log(user);
console.log(user.email);
// Acessando propriedades dde objeto
console.log(user.name.first_name);

// Executando funções dos objetos = objeto.function()
user.massage()

// Outra forma de acessar as propriedades e métodos de objetos (notação de colchetes)
// A  notação de pontos é melhor...

console.log(user["email"]),
console.log(user["name"]["first_name"]),

// Executando funções com colchetes
user["massage"]()






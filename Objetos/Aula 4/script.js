// Como acessar as propriedades do contexto doo objeto
// Aula 4 

const user = {
  name: "Rodrigo",
  massage: function() {
    console.log(`Olá, ${user.name}`)
  },
}

user.massage()

// Outra maneira de realizar isso! 

const user2 = {
  name: "João",
  massage: function() {
   console.log(`Olá ${this.name}`) // this = infos desse escopo do objeto, e não fuinciona arrow function "=> () {...}"
  },
}

user2.massage()
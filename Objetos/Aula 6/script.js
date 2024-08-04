// Aula 6 - Optional chaiging
/*
OPTIONAL CHAINING (?.) - encadeamento opicional Se a propriedade ou função é nullish
(null or undefined), a expressão retorna undefined em vez de gerar um erro

Últil ao excplorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias (Tipo foto do usuário ele pode ooptar por não colocar no começo)

RECURSO MUITO INTERESSANTE
*/ 


const user = {
  id: 1,
  name: "Rodrigo",
  /*
  address: {
    street: "Avenida Brasil",
    city: "São Paulo",
    geo: {
      latitude: 47.000,
      longitude: 17.5674,
    },
  }, 

massage: function() {
  console.log(`Olá, ${this.name}!`);
},*/

}

// console.log(user.address.street) // So assim deu erro, como faço o street virar opicional?
console.log(user?.address?.street) // Agora não da erro e aparece indefinido. 
console.log(user?.address)

user.massage?.() // Apenas adiciona esse ?.


// Descrição da aula
console.log("--- Acima é um exemplo")

// O quue eu quero checar e não tenho certeza eu adicono um ? antes
/*

Isso é muito bom pois se você erra uma coisa todo java script para! Então usando isso você pode modificar e testar antes e ver aonde estar o erro.


*/





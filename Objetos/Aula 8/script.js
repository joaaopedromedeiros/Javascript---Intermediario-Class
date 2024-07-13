
// Função construtora exemplo ( o segredo é o return)


function createProduct (name) {
  const product = {}

  product.name = name; // dentro do parâmetro name VAI RECEBER O "NAME"
  product.details = function() {
    console.log(`O nome do produto é ${this.name}`)
  } /*esse this identifica no contexto inserido, toda função*/ 

  return product
}  // não é qualquer função, ela é função que cria um objeto e que retorna um objeto quando instanciada, isso com o return 

/*
O que é instanciada?
Uma copia do objeto na memória, como abaixo
*/ 


// O new cria um novo objeto com a mesma >>estrutura definida<< do construtor/função construtora

const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

console.log(product1 === product2) // Verificando se product 1 é igual ao 2

// Exemplos de funções construtoas disnponíveis no próprio java script

let myName = new String("Rodrigo")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)

// Outra forma de  criar a funçãoo  construtora (precisa do conteúdo de classes)

function Person(name){
  this.name = name
  this.massage = function() {
    console.log(`Olá, ${this.name}`)
  }
}

const person1 = new Person("Rodrigo")
console.log(person1)
person1.massage()

const person1 = new Person("João")
console.log(person2)
person2.massage()

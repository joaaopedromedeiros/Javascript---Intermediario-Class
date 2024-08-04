// Classes (últimos moduloooo)

console.log("Introdução a classes")
class Person {
  constructor(name){
    console.log("Olá", name )
  }
} 

// O constructor é um método de texto especial da própria classe, uma função que executa através da classe
// Posso repassar parametro ao construtor (name nesse caso)

const person = new Person("Rodrigo")

console.log("--------------------------------------------------------------------------------")
console.log("Criando propriedades dentro das classes")

class Product {
  constructor(name){
    this.name = name
  }
}

// o this se refere ao contexto que ele está inserido, no contexto de product ali. A classe vai receber por parametro o nome do produto "(name)" e uso o nome recebido no momento da instancia da classe para repassar para ele como uma propriedade que vai ficar disponível nessa classe.

// Revisão de parametro, funções ...

const product = new Product("Teclado")
console.log(product.name) // se comentar o this.name = name, essa propriedade name criada na classe não existe mais

const product2 = new Product("Mouse")
console.log(product2.name)

const product3 = new Product("Monitor")
console.log(product3.name)

console.log("--------------------------------------------------------------------------------")
console.log("Adicionando métodos as classes")

class User {
  constructor(name, email, address) {
    this.name = name
    this.email = email
    this.address = address
  }

  // criando um método, como uma função normal

  sendEmail(){
    console.log("Email enviado para", this.name,"para o endereço", this.email, "localizado na rua",  this.address)
  }
  
}

const user = new User("Jp", "joao@gmail.com","jslab")
user.sendEmail()

console.log("--------------------------------------------------------------------------------")
console.log("O que é método estático? Como utilizar e observações")

class User2 {
  showMassage() {
    console.log("Essa é uma mensagem instanciada")
}
}

// Você pode definir o construtor quando de fato for utilizar ele. Acima está o método diretamente

// Como chamar a função?

// 1° Instancia a classe
const user2 = new User2()

// 2° Chama a constante(user2) que tem a classe(User2) inserida nela (linha 72), a qual tem a função dentro
user2.showMassage()

console.log("Usando o método sem instanciar - parte 2 da aula")

/* -----> Para usar a função eu preciso instanciar a classe, mas agora vamos acessar esse método sem instanciar

Abaixo uma copia com o método "static adicionado antes do método/função"

*/

class User3 {
  static showMassage() {
    console.log("Essa é uma mensagem de função static sem instanciar")
}
}
User3.showMassage()
// classe.método() --> ( Como chamar funçaõ)






/* 
OBSERVAÇÕES: Cuidado se quiser usar algum método que você tenha deixado como static que precise de informações do constructor pois o método construtor só é possível ser usado no momento que a classe é instanciada. E no static usa mesmo sem ter ela(a informção) da classe instanciada!

Caso queira usar o conteúdo de mensagem passe um paramêtro de massage no método/função que está como static

exemplo:

static showMassage(massage) {
    console.log(massage)
}
*/

console.log("--------------------------------------------------------------------------------")
console.log("Como aplicar herança de classes")

class Animal {
  constructor(name, idade) {
    this.name = name
    this.idade = idade
  }

  makeNoise() {
    console.log("Algum som genérico do animal")
  }

}

class Dog extends Animal {
  // Não tem nada aqui
}

const dog = new Dog("Bilu","4")
console.log(dog.name)
console.log(dog.idade)

// Mesmo sem o Dog não ter nada o extends faz ele herdar as propriedades e métodos do Animal tanto para usar ali na constante como aqui la linha 132 para chamar a função/método
dog.makeNoise()

console.log("--------------------------------------------------------------------------------")
console.log("Sobrescrevendo métodos")


class Animal2 {
  constructor(name, idade) {
    this.name = name
    this.idade = idade
  }

  makeNoise2() {
    console.log("Algum som genérico do animal")
  }

}

class Dog2 extends Animal2 {
  makeNoise2() {
    console.log("Woof!, Woof")
  }
} // Apenas reescrevi como se tivesse fazendo denovo

const dog1 = new Dog2("Bilu2","2")
console.log(dog1.name)
console.log(dog1.idade)

class Cat extends Animal2 {
  makeNoise2() {
    console.log("Miauu!, Miauu!")
  }

  run() {
    console.log("Cat igual flash")
}
}

const cat = new Cat

// Mesmo sem o Dog não ter nada o extends faz ele herdar as propriedades e métodos do Animal tanto para usar ali na constante como aqui la linha 132 para chamar a função/método

// Como sobresscrever o método/função da classe pai que ta fazendo repetir o mesmo console log? Nesse caso Animal2? 
dog1.makeNoise2()
cat.makeNoise2()
cat.run()

/*

OBSERVAÇÕES: Pode criar métodos específicos dentro das classes que estão tendo herança de outro local. Eles são utilizados apenas pelas constantes, que possuem essa classe, e não nas outras! Exemplo: Cat correndo... igual flash




*/




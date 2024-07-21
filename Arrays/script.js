// Arrays - 7 aulas




// Aula 1 - Criando um array com um cosntrutor
const newArray = new Array()
console.log(newArray)
console.log("Rodrigo".length)
console.log(newArray.lenght)


// [] - Array
// () - Objects

// Cria o array com 10 posições vazias
const available = new Array(10); // criando array com 10 posições disponíveis
console.log(available);
console.log(available.lenght); // 10 posições vazias (10 * empty)





// Aula 2 - Criando e acessando um array







// Criando um array
let fruits = ['apple', 'Banana', 'orange']
console.log(fruits)

// Quantidade de itens do array
console.log(fruits.length)

// Posso acessar separadamente, com a ordem dos indices (0- ...)
console.log(fruits[1])
console.log(fruits[7]); // undefined no console

// Acessando dinamicamente os indices dos itens, pois se adicionar outro o 2 vira 3
console.log(fruits[fruits.length -1]);










// Aula 3 - Convertendo uma string em array





let fullName = "João Pedro"

// Cria um Array com os nomes separando por um espaço.
console.log(fullName.split(""));

// Cria um Array com as letras.         
console.log(Array.from(fullName));
// um array que cada letra é uma posição e indice, inclusive espaços.










// Aula 4 - Adicionando e removendo um item de um array







let users = []; // apenas isso cria oo array

// O pushh adiconando itens no final do array
users.push("Rodrigo")
users.push("joão")
users.push("Marcos")

console.log(users)





// Adicionando no inicio do array
users.unshift("Ana")





// Removendo um item do iinicio
users.shift(); // nesse caso a ana

// Removendo um item no final do array
users.pop(); // Nesse caso o Marcos

console.log(users)



// Aula 5 - usando indices
let fruitss2 = ['Apple', 'Watermelon','Lemon', 'Strawberry']
console.log(fruitss2);

// Encontra e Retorna o indice do elemento no Array 
let position = fruitss2.indexOf("Lemon");
console.log(position);


/* fruits.splice(1,3); Remove do indice 1 ao 3 (Inicio, até qual?)*/

//  De outro jeito, remove um item pela posição do indice
fruitss2.splice(position, 2); // Pegou a posição da variavel position e dps removeu
console.log(fruitss2)












// Aula 6 - Quais elementos o array aceita?

let myArray = [
  "Um texto",

  10,

  true,

  function(){
    console.log("Função dentro do array!")
  },

  {
    name: "Rodrigo",
    email: "Rodrigo@gmail.com"
  }
]

// texto, número, boleano(verdadeiro ou falso), função, objetos

// texto.
console.log(myArray[0])

// Número
console.log(myArray[1])


// Bolean
console.log(myArray[2])

// Função
myArray[3]()

//Objeto
console.log(myArray[4].name, myArray[4].email) /* Acessando o objeto do indice 4, com a propriedade name*/














// Aula 7 - verificando se existe um conteúdo no array
let fruits3 = ["Apple","Orange","Banana"]

// Verifica se um item existe no array
console.log(fruits3.includes("Apple")); // cuidado com case sensitive























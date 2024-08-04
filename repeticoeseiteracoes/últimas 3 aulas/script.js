console.log("Aula de for ... of")
//for ... of itens sobre  valores de um objeto interável

// a diferença dele para o for .... in é que a gente percorre  a propriedade e no for ... of os objetos.

let students = ["Rodrigo", "Amanda", "João"]

// lista com o singular(student) e of todos os itens (students)
// um estudante dessa listas de students
for(let student of students){
  console.log(student) // mostra os students;
}

// comparação com IN
for(let student in students){
  console.log(student) // mostra o indice;
}

/* o OF funciona com objetos interaveis, que tenham posições/indices para correr. Ou seja, arrays.

Se você tentar usar um objeto, como abaixo que está comentado você terá um erro. 

*/

/* let user = {
  name: "João",
  email:  "João@gmail.com",
} */

  /* "TypeError: user is not iterable" */

// mas eu posso transformar o objeto sem interação em array [] da  certo
let user = [ {
  name: "João",
  email:  "João@gmail.com",
} ]

for (let value of user) {
  console.log(value)
}






console.log("------------------------------------------------------------------");



// Aula de break 
console.log("Aula de break, exemplo com swith")


// Break encerra a execução da repetição ou switch para repetir para a instrução seguinte.
// Sem o break vai tudo!

let option = 3

switch(option) {
  case 1: 
  console.log("Cadastrar")
  break // para assim que acha a instrução;
  case 2: 
  console.log("Atualizar")
  break
  case 3: 
  console.log("Remover")
  break
  default: 
  console.log("Opção invalida")
  break
}

console.log("Break dentro da estrutura de repetição")


for(let j = 0; j < 10; j++) {

if ( j === 5) {
  console.log("Atingiu nível 5, repetição parou")
  break
}

  console.log(j)
}


// Aula de continue 
console.log("------------------------------------------------------------------");
console.log("Aula de continue")

// Continue encerra (pula) a executação das intruções na iteração atual e continua a execução do loop com a própria iteração

for (let i = 0; i <= 10; i++) {

  if ( i === 5) {
    console.log("uau, está na metade do caminho!, isso ocupa o 5 e continua")
    continue
  }

  console.log(i)

}









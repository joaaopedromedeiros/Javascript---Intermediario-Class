// Repetições 

/* Executa até o critério ser atingido como o exemplo do mairo, enquanto ele estive em uma posição menor que 6 ele anda e se for igual a 6 ele pula*/






// Aula 1 - Loop While

console.log("Aula 1 - loop while")


/*
WHILE: Executa até que a condição seja VERDADEIRA
*/

/* 

--> Como utilizar?

while (condição) {
  bloco de códigos que deve ser executado
}

*/

let execute = true

/*while (age < 18) {

}*/

while (execute) {
 let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")

 if (response === "2") {
  execute = false
}

}

console.log("Segue o fluxo"); // Apenas vai enviar no console após acabar a repetição acima





// === --> Estreitamente igual, continua executando







// Aula 2 - Loop infinito, estrutuura de repetição que não tem fim, exemplo...
console.log("Aula 2 - loop infinito")

/* let value = true
while (value) {
  console.log("Executando while...")
}  */

// Por padrão while verifica se é verdadeiro e não precisa por no partametro "variável === true"

// Cuidado! Se não for de forma intencional isso pode deixar o navegador lento... executa toda hora








// Aula 3 - loop do while
console.log("Aula 3 - Loop doo while")

// DO WHILE:  repete até que a condição especificada seja VERDADEIRA. Noo entanto, a instrução será executada pelo menos uma vez  antes da condição ser verificada.

let value = 0

do {
  value++
  console.log(value)
} while (value < 10)

  // Esse  value== faz adicionar mais um valor sempre,  quando chegar em 10 para

  console.log("Segue o fluxo...")






  // Aula 4 -  Loop for
  console.log("Aula 4 - loop for")

  /*

  FOR repete até que a condição especificada seja FALSA

  - variável de  coontrole, voce  cria 
  - condição
  - incremento ou decremento da variável de controle 

  --> Ordem respectivamente com as  que estão acima EM "-" dos parametros abaixo (variável de controle)
  --> Separa por ponto e virgula ";"

   */

  for  (/*variável de controole*/ step = 0; step < 10; step++) {

    /* O que precisa ser executado enquanto não for falso*/
    console.log(step)

  }




  // Exemplo de tabuada sem criar todos console.log, use repetição!
  
  let number = 7
  for ( step = 0; step <= 10; step++){
console.log(`${number} x ${step} = ${number * step}`)
 }
  
  // primeiro descrevi a variável e depois do ingual eu realmente coloquei. Ele incrementa e multiplica pelo próximo até o incremento ser "falso" e ser maior que 10.








//  Aula 7  -  For  in 
  // FOR ..... in executa iterações a partir de um objeto e percorre as propriedades

  console.log("Aula 7 - For .... in")

  let person = {
    name: "Rodrigo",
    surname: "Gonçalves",
    email: "rodrigo@email.com",
  }

  let steps = 1

  // Posso usar ele para percorrer as propriedades dentro do objeto, pecorrendo as propriedades "in" person

  for (/*propriedade  auxiliar (LET PROPERTY IN "objeto")*/ let property in person){

    console.log(steps)

    // Exibe o nome da propriedade
    console.log(property)

    // Exibe o conteúdo da propriedade
    console.log(person[property])



    steps++; 

  }

  // Esse steps é acionado a cada volta, a cada iteração, a cada olhada de dados do objetos (3 iterações sou 3 vezes)

  // esta percorrendo as proproiedades a ppartir de um objeto, estou pegando oo objeto de person e estou percorrendo elas, um objeto de cada vez oq aiconou 3 vezes e somou.

  /* 2° parte da aula com for*/
console.log("Segunda parte da aula, for (in let...)")

  let student = ["Rodrigo", "João", "Amanda"]

  // for  (let "nome-dado-por-você-de-identificação"), percorrendo cada posição de student dentro de student, se no lugar de index fosse "student"
  for(let index in student) {
    console.log(index); // posição de cada um
    console.log(student); // mostra apenas a propriedade
  }

  






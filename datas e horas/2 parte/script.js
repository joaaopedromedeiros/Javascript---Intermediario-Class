
// Formatando data e hora
console.log("Formatando data e hora")

let date = new Date("2014-07-02T14:30:00")

// Deixasndo 2 alg o dia
console.log(date.getDate().toString().padStart(2, "0"));


let day = date.getDate().toString().padStart(2, "0")

// converti para string, agora posso usar métodos de texto como o padstart que fala pra ter 2 digitios e o que não tiver completa com 0.

// Deixando 2 alg o mês
console.log(date.getMonth().toString().padStart(2, "0"));

let month = (date.getMonth().toString().padStart(2, "0"))
console.log(month);

// Criando padrão e formatando

let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`);

console.log("---------------------------------------------------------------")
console.log("Convertendo uma data para string");

let date3 = new Date("2024-07-02T14:30:00")

// converte para string
console.log(date3.toString())

//Retorna somente a data
console.log(date3.toDateString())

// retorna somente a hora
console.log(date3.toTimeString())

console.log("---------------------------------------------------------------")
console.log("Exibir data e hora formatado");

let date4 = new Date("2024-07-02T14:00:00")

// Exibe a data e hora no formato  local
console.log(date4.toLocaleDateString()) // padrão do sistema do computador "Locale"
console.log(date4.toLocaleTimeString()) // Horário padrão do sistema

// Exibe a data e hora no formato  escolhido pela pessoa
console.log(date4.toLocaleDateString("en")) // define o formato
console.log(date4.toLocaleTimeString("en"))


console.log("---------------------------------------------------------------")
console.log("Trabalhando com toLocaleString()");

let date5 = new Date("2024-07-02T14:30:00")

console.log(date5.toLocaleString())

console.log(date5.toLocaleString("en")) // também podemos definir um padrão
console.log(date5.toLocaleString("pt-BR", {dateStyle: "short"} )
)
console.log(date5.toLocaleString("pt-BR", {dateStyle: "long"} ) // por extenso
)
console.log(date5.toLocaleString("pt-BR", {dateStyle: "medium"} ) // mês abreviado
)

console.log(date5.toLocaleString("pt-BR", {dateStyle: "full"} ) // completo com dia da semana
)

console.log(
  date5.toLocaleString("pt-BR", {
    day: "2-digit", 
    month: "2-digit",
    hour:"2-digit",
    minute: "2-digit",
     }) 
     // completo com dia da semana;
)

// Posso formatar valores também!

let amount = 12.5
console.log(
  amount.toLocaleString("pt-BR", {
    style: "currency", 
    currency: "BRL", 
  })
  )





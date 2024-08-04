// exibiu obtendo data e hora
console.log("Obtendo data e hora");

console.log("Ano,data,horário, etc completo");
console.log(new Date())

console.log("-- Métodos para pegar dados separados de data e hora")
console.log(new Date().getDay())
console.log(new Date().getTime()) // milisegundos;

/*console.log(new Date().get"Método"()*/

// Aula 2- Definindo uma data e uma hora específica
console.log("------------------------------------------------------------------")
console.log("definindo uma data e uma hora específica")

//  Define uma  data com (ano), (mês), e  (dia)
console.log(new Date(2024, 6, 3));

// Definir data (ano, més, e dia ) e (hora: 14h,30m  e 0s)
console.log( new Date(2024, 6, 2, 14, 30, 0));

// Definindo data e hora com String  em vários formatos
console.log( new  Date("2024-07-03T14:30:00"));

console.log(new Date("July, 2024 14:30:00"));

//
console.log(new Date("July 3, 2032 14:30:33"));

console.log("------------------------------------------------------------------")




console.log("Método para trabalhar com  data e hora")


// Dado de refer~encia
let date = new Date("2024-07-02T14:30:10")




// Dia da semana 0 à 6 ( domingo é zero(0) )
console.log(date.getDay());

// Dia do mês (0 a 30)
console.log(date.getDate());

// Mês (0 a  11)
console.log(date.getMonth() + 1);

// Ano
console.log(date.getFullYear());

// Horas
console.log(date.getHours());

// Minutos
console.log(date.getMinutes());

// Segundos
console.log(date.getSeconds());

// Modificando a data e a hora
console.log("------------------------------------------------------------------")
console.log("Modificando uma data e hora");

let date2 = new Date("July 3, 2024 14:30:00");
console.log(date)

//mofificando o ano (começa com 0)
date.setFullYear(2030)

//mofificando o mês (começa com 0)
date.setMonth(8)

//Modificar o dia 
date.setDate(10)

//Modificar a hora
date.setHours(18)

//Modificar o minuto
date.setMinutes(15)

// modificar o segundo
date.setSeconds(30)

console.log(date)







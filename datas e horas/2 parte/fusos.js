// Intl é a API de Internacionalização do EOMASScript.


// Obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)

// Formata de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date)) // passando uma nova data usando o padrão br
console.log(new Intl.DateTimeFormat("en-US").format(new Date)) // passando uma nova data usando o padrão usa

// Timezone com essa api (diferença do timezone)

const date7 = new Date()
console.log(date7.getTimezoneOffset() ) // retorna em minutos a diferença de fuso horário
console.log(date7.getTimezoneOffset() / 60) // agora divindo por 60 retorna em horas


// Criando uma data e hora com fuso horário
console.log("---------------------------------------------------------------")
console.log("Criando uma data e hora com fuso horário");


const dateWithTimezone = new Date("2024-08-03T22:01:56.463+03:00")
// repare aqui ("2024-08-03T22:01:56.463 >>>>+03:00"<<<<, adiconou mais 3 horas)
console.log(dateWithTimezone.toISOString())

// Texto maiúsculos e minúsculos
console.log("Aula 1 - Texto maiúsculos e minúsculos")

let texto1 = "Estou estudando os fundamentos de javascript"
console.log(texto1) 



// Exibir o texto em miúsculo.
console.log(texto1.toLowerCase())

// esse () é necxessário para usar porque é um método da string tipo uma função do próprio javascript

// Exibir o texto em miúsculo.
console.log(texto1.toUpperCase())










// Aula 2 - Obtendo o comprimento de uma string
console.log("Aula 2 - Obtendo o comprimento de uma string")







let texto2 = "Estou estudando os fundamentos"
console.log(texto2.length)
// Aqui é uma propriedade, não () então não é um método
// Campus que criam nova senha com valor mínimo, podemos usar o if " se for menos da erro"

let password = "1234567" // testa por o 8

if (password.length < 8){
  console.log("A senha deve ter no mínimo 8 caracteres")
}

// Verificar5 quantos digitos tem um número (se for do tipo  number)
let value = 12345
console.log(typeof value)
console.log( typeof String(value))

// Agora funciona, convertendo
console.log( String(value).length)
console.log(value.toString().length) // constante.método de conversão.propriedade






// Aula 3 - Substituindo e fatiando um texto


console.log("Aula 3 - Substituindo e fatiando")

let massage = "vou fatiar e substituir esse texto"
console.log(massage)
console.log(massage.replace("texto","oi!"))

// Extraindo uma parte da string (start, end)
console.log(massage.slice(0,5)) /*Posição de caracteres, corta até... e ele também conta espaço*/

let textWithSpace = "   Texto de exemplo"
console.log(textWithSpace.length)

// Remove espaço do começo e do fim, também tem o trim."algo"
console.log(textWithSpace.trim())
console.log(textWithSpace.trim().length)


// Aula 4 - Completando uma string
console.log("Aula 4 - Completando uma string com valores")





// Cartões de créditos, oculta os primeiros digitos e oculta os últimos.

const creditCard = "1234567812344928"
console.log(creditCard.length)



const lastDigits = creditCard.slice(-4)
// assim com (-) o slice funcionará de trás para frente, pegando apenas os 4 últimos
console.log(lastDigits)


// P padStart preenche a parte esquerda (coisa adicionada  no padstart+string)
const maskedNumber = lastDigits.padStart(creditCard.length,"X") 
// pedStart("o que eu quero substituir","pelo o que?""), leia o pedstart para entender bem
console.log(maskedNumber)




// O padEnd preenche o final(10 caracteres no total, substitua por "#" o que sobrar dos 10)
const number = 12345
const addRightNumbers = String(number).padEnd(10,"#") 
console.log(addRightNumbers)








// Aula 5 - Unindo e separando strings
console.log(" Aula 5 - Unindo e separando strings")

let text = "estudar, Aprender, Praticar"

// Separando strings com split("parâmetro")
let separateText = text.split(",") // separa assim que tiver virgula
console.log(separateText)

let massage4 = "Estou aprendendo javascript"
console.log(massage4.split(" "))

//Unindo a string
let joined = separateText.join("@")

console.log(joined)








// Aula 6 - Encontrando um conteúdo no texto
console.log("Aula 6 - Encontrando o conteúdo no texto")

let massage10 = "Construindo o universo!"

// Obtém a posição da palavra.
console.log(massage10) // normal
console.log(massage10.indexOf("universo")) // a partir da posição 14 (letra 14)

// se ele não encontra o começo da palavra ele retorna de informação -1
// Cuidado com o canse sensitive

// verificando se tem uma palavra na string]
console.log(massage10.includes("Universo!")) // case  sensitive
console.log(massage10.toLowerCase().includes("Universo!")) // case  sensitive
console.log(massage10.includes("universo"))








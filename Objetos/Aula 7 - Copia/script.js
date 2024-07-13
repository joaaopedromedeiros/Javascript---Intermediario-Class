/*
OPERADOR DE COALESCÊNCIA NULA (??)
Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo
*/

let content = null;
console.log(content) //  Sem a coalescência nula = undefined
console.log(content ?? "Conteúdo Padrão") //  Com a coalescência nula, o "..." assume e não da erro em todo código

content = "Ola, rodrigo"; // Substituindo o valor para ver o null sumindo..
console.log(content) // Observação, consigo usar ?. no console.log ... 

// Anotações: Considera null e undefined ou conteúdo

/* 


Aplicando na realidade...


*/

const user = {
  username: "JoãoMedeiros",
  profile_picture: undefined,
}

console.log(user.profile_picture ?? "default.png")


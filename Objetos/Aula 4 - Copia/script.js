// Aula 5 - Atualizando objetos

const product = {
  name: "Teclado",
  quantity: 100,
}

// Acessando a propriedade do objeto 
console.log(product.name)
console.log(product.quantity);

console.log("Atualizando o produto..................")


// Atualizando o valor de uma propriedade.
product.quantity = 90;
console.log(product.quantity);

product.name = "Mouse"
console.log(product.name);

// Outras forma de atualizar o conteúdo

product["quantity"] = 50
console.log(product)
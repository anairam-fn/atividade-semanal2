// Crie um algoritmo que leia o valor de um jantar, calcule e informe o
// valor da taxa do garçom (10%) e o valor total a ser pago.

const valorConta = 246.8;
const taxaGarçom = (10 / 100) * valorConta;

const valorTotal = valorConta + taxaGarçom;

console.log(`O valor da taxa do garçom é R$${taxaGarçom.toFixed(2)}. Assim, o valor total da conta será R$${valorTotal.toFixed(2)}`);

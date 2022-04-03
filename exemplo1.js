// Solicite o preço de uma mercadoria e o percentual de desconto 20%.
// Exiba no console o valor do desconto e o preço a pagar.

const preçoMercadoria = 993;
const desconto = preçoMercadoria * 0.2;

const preçoPago = preçoMercadoria - desconto;

//console.log("Com o desconto de R$" + desconto.toFixed(2) + ", o preço pago é R$" + preçoPago.toFixed(2) + ".")

console.log(`Com o desconto de R$ ${desconto.toFixed(2)}, o valor pago é R$ ${preçoPago.toFixed(2)}`);

// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário,
// assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar,
// sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const kmAndados = 63;
const diasAlugados = 6;

const preçoAluguel = 60 * diasAlugados + 0.15 * kmAndados;

console.log(`O aluguel do carro custou R$${preçoAluguel.toFixed(2)}.`);

// Calcule o tempo de uma viagem de carro.
// Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

const distanciaKm = 100;
const velocidadeKmH = 90;

const velocidadeKmMin = velocidadeKmH / 60;
console.log(velocidadeKmMin);

const tempoViagemMinutos = distanciaKm / velocidadeKmMin;
console.log(tempoViagemMinutos);

const horas = Math.floor(tempoViagemMinutos / 60);
const minutos = tempoViagemMinutos % 60;

console.log(
  `O tempo da viagem será de ${horas} horas e ${minutos.toFixed(0)} minutos.`
);

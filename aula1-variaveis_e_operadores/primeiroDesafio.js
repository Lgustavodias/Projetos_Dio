// Programa de calculo de combustivel por distancia

let valorCombustivel = 5.59;
const kmPorLitro = 14;
let distancia = 150;

total = (distancia / kmPorLitro) * valorCombustivel;

console.log("valor gasto: R$" + total.toFixed(2));

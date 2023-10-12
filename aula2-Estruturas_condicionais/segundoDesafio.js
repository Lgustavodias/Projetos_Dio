// Programa de calculo de combustivel por distancia com tipo de combustivel e tipo usado

let valorGasolina = 5.59;
let valorEtanol = 5.1;
const kmPorLitro = 14;
let distancia = 150;
let tipo = "etanol";

if (tipo === "gasolina") {
  total = (distancia / kmPorLitro) * valorGasolina;
} else if (tipo === "etanol") {
  total = (distancia / kmPorLitro) * valorEtanol;
} else {
  console.log("tipo de combustivel inválido");
}
total = (distancia / kmPorLitro) * valorEtanol;

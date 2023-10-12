class Carro {
  marca;
  cor;
  gasto;

  constructor(marca, cor, gasto) {
    this.marca = marca;
    this.cor = cor;
    this.gasto = gasto;
  }
  calculo(qtdquilometros, valorCombustivel) {
    return qtdquilometros * this.gasto * valorCombustivel;
  }
}

function calculosCarros() {
  const carroGustavo = new Carro("gol", "prata", 1 / 15);
  const carroEva = new Carro("uno-escada", "azul", 1 / 30);
  console.log("O carro do Gustavo faz:" + carroGustavo.calculo(30, 5.49));
  console.log("O carro da Eva faz:" + carroEva.calculo(30, 5.49));
}

(function () {
  calculosCarros();
})();

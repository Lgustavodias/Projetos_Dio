class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarImc() {
    const imc = this.calcularImc();
    if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
    } else {
      return "Obesidade Grave";
    }
  }
}

const gustavo = new Pessoa("Luis Gustavo", 57, 1.6);

(function () {
  console.log("Seu imc é:" + gustavo.calcularImc().toFixed(2));
  console.log(gustavo.classificarImc());
})();

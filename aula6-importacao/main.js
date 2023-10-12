const { gets, print } = require("./funcoesAuxiliares");

const numerosSorteados = [];
let maiorValor = null;

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets();
  numerosSorteados.push(numerosSorteado);

  for (let i = null; i < 5; i++) {
    if (maiorValor < numerosSorteado) {
      maiorValor = numerosSorteado;
    }
  }
}
print("Numeros sorteados:" + numerosSorteados);
print("Maior valor:" + maiorValor);

const numero = 1;

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

function tabuada() {
  for (let i = 0; i <= 10; i++) {
    const multiplicacao = numero * i;
    console.log(multiplicacao);
  }
}

function listarLista() {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      console.log(lista[i]);
    }
  }
}
(function () {
  tabuada();
  listarLista();
})();

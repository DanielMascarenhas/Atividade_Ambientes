function trocarElementos(array, A, B) {
  var aux = array[A];
  array[A] = array[B];
  array[B] = aux;
}

function quicksort(array, inicio, fim) {
  if (inicio < fim) {
    var indiceParticao = inicio;
    var finalArray = array[fim];

    for (var i = inicio; i < fim; i++) {
      if (array[i] < finalArray) {
        trocarElementos(array, i, indiceParticao);
        indiceParticao++;
      }
    }

    trocarElementos(array, indiceParticao, fim);

    quicksort(array, inicio, indiceParticao - 1);
    quicksort(array, indiceParticao + 1, fim);
  }
}

function Ordenar(numeros) {
  var input = numeros;
  var numeros = input.split(", ").map(Number);

  quicksort(numeros, 0, numeros.length - 1);

  return numeros.join(", ");
}
module.exports = Ordenar;

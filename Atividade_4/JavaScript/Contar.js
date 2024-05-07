function Contar(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return 0;
  } else {
    var primeiroDado = Math.min(numero1, numero2);
    var segundoDado = Math.max(numero1, numero2);
    var contagem = 0;

    for (var i = primeiroDado; i <= segundoDado; i++) {
      contagem++;
    }

    return contagem;
  }
}
module.exports = Contar;

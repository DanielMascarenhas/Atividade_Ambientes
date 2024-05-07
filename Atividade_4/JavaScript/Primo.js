function Primo(numero) {
  var numero = parseInt(numero);

  var ehPrimo = true;

  if (numero < 2) {
    ehPrimo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
  }

  if (ehPrimo) {
    return "S";
  } else {
    return "N";
  }
}
module.exports = Primo;

function calcularMDC(numero1, numero2) {
  while (numero2 !== 0) {
    var temp = numero2;
    numero2 = numero1 % numero2;
    numero1 = temp;
  }
  return numero1;
}

function MDC(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return 0;
  } else {
    var mdc = calcularMDC(numero1, numero2);
    return mdc;
  }
}
module.exports = MDC;

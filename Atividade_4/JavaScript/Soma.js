function Soma(entrada) {
  const numeros = entrada.split(", ").map(Number);

  let somatorio = 0;
  for (let i = 0; i < numeros.length; i++) {
    somatorio += numeros[i];
  }

  return somatorio;
}

module.exports = Soma;

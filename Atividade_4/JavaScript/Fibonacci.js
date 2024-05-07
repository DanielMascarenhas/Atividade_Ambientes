function Fibonacci(N) {
  if (N <= 1 || isNaN(N)) {
    return 0;
  } else {
    var termo1 = 0;
    var termo2 = 1;
    var fibonacci = [termo1, termo2];

    while (fibonacci.length < N) {
      var proximoTermo = termo1 + termo2;
      fibonacci.push(proximoTermo);
      termo1 = termo2;
      termo2 = proximoTermo;
    }

    return fibonacci.join(", ");
  }
}

module.exports = Fibonacci;

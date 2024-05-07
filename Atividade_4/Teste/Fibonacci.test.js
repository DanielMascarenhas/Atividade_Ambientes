const Fibonacci = require("../JavaScript/Fibonacci");

test("Espera um conjunto de numeros x, y, z ... ", () => {
  expect(Fibonacci(10)).toBe("0, 1, 1, 2, 3, 5, 8, 13, 21, 34");
});

test("Espera um conjunto de numeros x, y, z ... ", () => {
  expect(Fibonacci(17)).toBe(
    "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987"
  );
});

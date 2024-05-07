const Ordenar = require("../JavaScript/Ordenar");

test("Espera um conjunto de numeros x, y, z ... ", () => {
  expect(Ordenar("5, 4, 3, 2, 1")).toBe("1, 2, 3, 4, 5");
});

test("Espera um conjunto de numeros x, y, z ... ", () => {
  expect(Ordenar("5, 19, 3, 8, 1")).toBe("1, 3, 5, 8, 19");
});

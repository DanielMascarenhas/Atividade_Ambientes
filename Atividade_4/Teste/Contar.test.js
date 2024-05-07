const Contar = require("../JavaScript/Contar");

test("Espera um numero x", () => {
  expect(Contar(1, 10)).toBe(10);
});

test("Espera um numero x", () => {
  expect(Contar(18, 5)).toBe(14);
});

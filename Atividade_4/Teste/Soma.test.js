const Soma = require("../JavaScript/Soma");

test("espera um numero x", () => {
  expect(Soma("1, 2, 3, 4, 5")).toBe(15);
});

test("espera um numero x", () => {
  expect(Soma("10, 8, 7, 15, 17")).toBe(57);
});

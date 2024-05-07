const MDC = require("../JavaScript/MDC");

test("Espera um numero x", () => {
  expect(MDC(10, 20)).toBe(10);
});

test("Espera um numero x", () => {
  expect(MDC(50, 200)).toBe(50);
});

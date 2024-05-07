const Primo = require("../JavaScript/Primo");

test("Espera S ou N", () => {
  expect(Primo(7)).toBe("S");
});

test("Espera S ou N", () => {
  expect(Primo(1200)).toBe("N");
});

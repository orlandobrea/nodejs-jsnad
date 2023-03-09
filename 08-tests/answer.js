const divide = require("./file");

it("By cero must be an error", () => {
  expect(() => divide(1, 0)).toThrow();
});

it("10/2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});

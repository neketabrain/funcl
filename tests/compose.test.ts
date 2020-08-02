import { compose } from "../src";

const add = (num1: number) => (num2: number) => num1 + num2;
const multiple = (num1: number) => (num2: number) => num1 * num2;
const getResult = (num: number) => `Result: ${num}`;

describe("compose", () => {
  test("should be defined", () => {
    expect(compose).toBeDefined();
  });

  test("should be variadic function", () => {
    expect(typeof compose).toBe("function");
    expect(compose.length).toBe(1);
  });

  test("should perform right-to-left function composition", () => {
    const composed = compose(getResult, multiple(3), add(10));
    expect(composed(4)).toBe("Result: 42");
  });
});

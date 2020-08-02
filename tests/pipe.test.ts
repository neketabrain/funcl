import { pipe } from "../src";

const add = (num1: number) => (num2: number) => num1 + num2;
const multiple = (num1: number) => (num2: number) => num1 * num2;
const getResult = (num: number) => `Result: ${num}`;

describe("pipe", () => {
  test("should be defined", () => {
    expect(pipe).toBeDefined();
  });

  test("should be variadic function", () => {
    expect(typeof pipe).toBe("function");
    expect(pipe.length).toBe(1);
  });

  test("should perform left-to-right function composition", () => {
    const pipeline = pipe(multiple(3), add(10), getResult);
    expect(pipeline(4)).toBe("Result: 22");
  });
});

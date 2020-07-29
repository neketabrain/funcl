import { pipe } from "../src";

const add = (str: string) => str + " world";
const upper = (str: string) => str.toUpperCase();

describe("pipe", () => {
  test("should be defined", () => {
    expect(pipe).toBeDefined();
  });

  test("should be variadic function", () => {
    expect(typeof pipe).toBe("function");
    expect(pipe.length).toBe(0);
  });

  test("should perform left-to-right function composition", () => {
    const func = pipe(upper, add);
    expect(func("hello")).toBe("HELLO world");
  });
});

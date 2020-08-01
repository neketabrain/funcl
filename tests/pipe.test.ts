import { pipe } from "../src";

const add = (str: string) => str + " world";
const upper = (str: string) => str.toUpperCase();
const concat = (str1: string, str2: string) => str1 + str2;

describe("pipe", () => {
  test("should be defined", () => {
    expect(pipe).toBeDefined();
  });

  test("should be variadic function", () => {
    expect(typeof pipe).toBe("function");
    expect(pipe.length).toBe(1);
  });

  test("should perform left-to-right function composition", () => {
    const func = pipe(upper, add);
    expect(func("hello")).toBe("HELLO world");
  });

  test("first argument should have any arity", () => {
    const func = pipe(concat, upper, add);
    expect(func("Testing... ", "hello")).toBe("TESTING... HELLO world");
  });
});

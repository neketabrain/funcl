import { compose } from "../src";

const add = (str: string) => str + " world";
const upper = (str: string) => str.toUpperCase();

describe("compose", () => {
  test("should be defined", () => {
    expect(compose).toBeDefined();
  });

  test("should be variadic function", () => {
    expect(typeof compose).toBe("function");
    expect(compose.length).toBe(0);
  });

  test("should perform right-to-left function composition", () => {
    const func = compose(upper, add);
    expect(func("hello")).toBe("HELLO WORLD");
  });
});

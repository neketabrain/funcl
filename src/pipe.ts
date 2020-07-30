/**
 * @description Performs left-to-right function composition. The first argument may have any arity; the remaining arguments must be unary.
 * @param {Function} fn - The first function. May have any arity
 * @param {...Function} fns - The remaining functions to compose. Must be unary
 * @return {Function}
 * @example
 * const concat = (str: string, num: number): string => `${str} + ${num} + world`;
 * const upper = (str: string) => str.toUpperCase();
 * const pipeline = pipe(concat, upper);
 *
 * pipeline("hello", 123); // => HELLO + 123 + WORLD
 * @see compose
 */
export const pipe = <T extends any[], R>(
  fn: (...args: T) => R,
  ...fns: Array<(a: R) => R>
): Function => {
  const piped = fns.reduce((f, g) => (arg) => g(f(arg)));
  return (...args: T) => piped(fn(...args));
};

export default pipe;

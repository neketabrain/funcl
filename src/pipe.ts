import { Fn } from "./types";

/**
 * @description Performs left-to-right function composition. The first argument may have any arity; the remaining arguments must be unary.
 * @param {...Function} fns - The functions to compose
 * @return {Function}
 * @example
 * const upper = (str: string) => str.toUpperCase();
 * const add = (str: string) => str + " world!";
 * const pipeline = pipe(add, upper);
 *
 * const result = composed("hello"); // HELLO WORLD!
 * @see compose
 */
export const pipe = <T>(...fns: Fn<T>[]): Fn<T> =>
  fns.reduce((f, g) => (arg) => g(f(arg)));

export default pipe;

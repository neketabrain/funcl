import { Fn } from "./types";

/**
 * @description Performs right-to-left function composition. The all arguments must be unary.
 * @param {...Function} fns - The functions to compose
 * @return {Function}
 * @example
 * const upper = (str: string) => str.toUpperCase();
 * const add = (str: string) => str + " world!";
 * const composed = compose(add, upper);
 *
 * const result = composed("hello"); // HELLO world!
 * @see https://github.com/neketabrain/funcl#pipe
 */
export const compose = <T>(...fns: Fn<T>[]): Fn<T> =>
  fns.reduce((f, g) => (arg) => f(g(arg)));

export default compose;

import { Func } from "./types";

/**
 * @description Performs right-to-left function composition. The all arguments must be unary.
 * @param {Function} fn - The first function to compose.
 * @param {...Function} fns - The remaining functions to compose.
 * @return {Function}
 * @example
 * const add = (num1: number) => (num2: number) => num1 + num2;
 * const multiple = (num1: number) => (num2: number) => num1 * num2;
 * const getResult = (num: number) => `Result: ${num}`;
 *
 * const composed = compose(getResult, multiple(3), add(10));
 * composed(4); // => Result: 42
 * @see {@link https://github.com/neketabrain/funcl#pipe|pipe}
 */
export function compose<
  F1 extends Func<any, any>,
  FN extends Array<Func<any, any>>,
  R extends FN extends []
    ? F1
    : FN extends [Func<infer A, any>]
    ? (a: A) => ReturnType<F1>
    : FN extends [any, Func<infer A, any>]
    ? (a: A) => ReturnType<F1>
    : FN extends [any, any, Func<infer A, any>]
    ? (a: A) => ReturnType<F1>
    : FN extends [any, any, any, Func<infer A, any>]
    ? (a: A) => ReturnType<F1>
    : FN extends [any, any, any, any, Func<infer A, any>]
    ? (a: A) => ReturnType<F1>
    : Func<any, ReturnType<F1>>
>(fn: F1, ...fns: FN): R {
  return function _compose(raw: any) {
    return [fn, ...fns].reduceRight((memo, func) => func(memo), raw);
  } as R;
}

export default compose;

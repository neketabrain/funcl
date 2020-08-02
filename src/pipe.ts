import { Func } from "./types";

/**
 * @description Performs left-to-right function composition. The all arguments must be unary.
 * @param {Function} fn - The first function to pipe.
 * @param {...Function} fns - The remaining functions to pipe.
 * @return {Function}
 * @example
 * const add = (num1: number) => (num2: number) => num1 + num2;
 * const multiple = (num1: number) => (num2: number) => num1 * num2;
 * const getResult = (num: number) => `Result: ${num}`;
 *
 * const pipeline = pipe(multiple(3), add(10), getResult);
 * pipeline(4); // => Result: 22
 * @see {@link https://github.com/neketabrain/funcl#compose|compose}
 */
export function pipe<
  F1 extends Func<any, any>,
  FN extends Array<Func<any, any>>,
  R extends FN extends []
    ? F1
    : F1 extends Func<infer A1, any>
    ? FN extends [any]
      ? Func<A1, ReturnType<FN[0]>>
      : FN extends [any, any]
      ? Func<A1, ReturnType<FN[1]>>
      : FN extends [any, any, any]
      ? Func<A1, ReturnType<FN[2]>>
      : FN extends [any, any, any, any]
      ? Func<A1, ReturnType<FN[3]>>
      : FN extends [any, any, any, any, any]
      ? Func<A1, ReturnType<FN[4]>>
      : Func<A1, any>
    : never
>(fn: F1, ...fns: FN): R {
  return function _pipe(raw: any) {
    return [fn, ...fns].reduce((memo, func) => func(memo), raw);
  } as R;
}

export default pipe;

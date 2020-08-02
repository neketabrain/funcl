# funcl.js

[![npm Version](https://img.shields.io/npm/v/funcl.js.svg)](https://www.npmjs.com/package/funcl.js)
[![License](https://img.shields.io/npm/l/funcl.js.svg)](https://github.com/neketabrain/funcl/blob/master/LICENSE)
[![Bundle size](https://badgen.net/bundlephobia/min/funcl.js?label=size)](https://bundlephobia.com/result?p=funcl.js)
[![Bundle size](https://badgen.net/bundlephobia/minzip/funcl.js?label=gzip%20size)](https://bundlephobia.com/result?p=funcl.js)
[![Build Status](https://travis-ci.com/neketabrain/funcl.svg?branch=master)](https://travis-ci.com/neketabrain/funcl)

Functional library for JavaScript and TypeScript.

# Installation

```
npm install --save funcl.js
```

or

```
yarn add funcl.js
```

<br />

# API

## compose

```
((y -> z), (x -> y),  ..., (a -> b)) -> a -> z
```

Performs right-to-left function composition. The all arguments must be unary.

#### Example

```typescript
import { compose } from "funcl.js";
import { compose } from "funcl.js/esm"; // ES6 module

const add = (num1: number) => (num2: number) => num1 + num2;
const multiple = (num1: number) => (num2: number) => num1 * num2;
const getResult = (num: number) => `Result: ${num}`;

const composed = compose(getResult, multiple(3), add(10));
composed(4); // => Result: 42
```

<br />

## pipe

```
((y -> z), (x -> y),  ..., (a -> b)) -> a -> z
```

Performs left-to-right function composition. The first argument may have any arity; the remaining arguments must be unary.

#### Example

```typescript
import { pipe } from "funcl.js";
import { pipe } from "funcl.js/esm"; // ES6 module

const concat = (str: string, num: number): string => `${str} + ${num} + world`;
const upper = (str: string) => str.toUpperCase();
const pipeline = pipe(concat, upper);

const result = pipeline("hello", 123); // => HELLO + 123 + WORLD
```

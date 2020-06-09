import type Kid from "./symbol.ts"

export type Realize<T> = T extends keyof Kid ? Kid[T] : unknown

export type RealizeMap<T extends Symbol[]> = {
    [K in keyof T]: Realize<T[K]>
}

export default class Attribute<T extends symbol, R extends symbol[]> {
    result: T
    gen: (seed: number, ...val: RealizeMap<R>) => Realize<T>
    require: R
    constructor(
        result: T,
        gen: (seed: number, ...val: RealizeMap<R>) => Realize<T>,
        ...require: R
    ){
        this.result = result
        this.gen = gen
        this.require = require
    }
}
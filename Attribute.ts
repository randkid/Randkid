import Kid, {
    gender,
    name,
} from "./symbol.ts"

type Realize<T> = T extends keyof Kid ? Kid[T] : unknown

type RealizeMap<T extends Symbol[]> = {
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
import {
    name_m,
    name_f,
    Discrete,
} from "./deps.ts"
import {
    gender,
} from "./symbol.ts"

console.log(
    new Discrete(<[string, number][]> name_m).rand(Math.random())
)

interface Kid {
    [gender]: "m" | "f",
}

type Realize<T> = T extends keyof Kid ? Kid[T] : unknown

type RealizeMap<T extends Symbol[]> = {
    [K in keyof T]: Realize<T[K]>
}

class Distribution<T, R extends Symbol[]> {
    gen: (seed: number, ...val: RealizeMap<R>) => T
    require: R
    constructor(
        gen: (seed: number, ...val: RealizeMap<R>) => T,
        ...require: R
    ){
        this.gen = gen
        this.require = require
    }
}

const name = new Distribution(
    (seed, gender) => 
        new Discrete(
            <[string, number][]> {m: name_m, f: name_f}[gender]
        ).rand(seed), 
    gender
)
import {
    name_m,
    name_f,
    Discrete,
} from "./deps.ts"

import {
    gender,
    name,
} from "./symbol.ts"

interface Kid {
    [gender]: "m" | "f",
    [name]: string,
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

const namer = new Distribution(
    (seed, gender) => 
        new Discrete(
            <[string, number][]> {m: name_m, f: name_f}[gender]
        ).rand(seed), 
    gender
)
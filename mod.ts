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
    constructor(
        gen: (seed: number, ...val: RealizeMap<R>) => T,
        ...require: R
    ){

    }
}

new Distribution((seed, gender) => 0, gender)
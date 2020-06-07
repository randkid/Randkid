import {
    name_m,
    name_f,
    Discrete,
} from "./deps.ts"

import {
    gender,
    name,
} from "./symbol.ts"

import {Attribute} from "./Attribute.ts"

const namer = new Attribute(
    name,
    (seed, gender) => 
        new Discrete(
            <[string, number][]> {m: name_m, f: name_f}[gender]
        ).rand(seed), 
    gender,
)

console.log(namer.gen(Math.random(), "m"))
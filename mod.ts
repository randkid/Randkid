import {
    name_m,
    name_f,
    Discrete,
} from "./deps.ts"

import {
    gender,
    name,
} from "./symbol.ts"

import Attribute from "./Attribute.ts"

import Entity from "./Entity.ts"

const genderer = new Attribute(
    gender,
    (seed) => 
        <"m" | "f">
        new Discrete(
            [["m", 1], ["f", 1]]
        ).rand(seed),
)
const namer = new Attribute(
    name,
    (seed, gender) => 
        new Discrete(
            <[string, number][]> {m: name_m, f: name_f}[gender]
        ).rand(seed), 
    gender,
)

console.log(new Entity(genderer, namer)[gender])
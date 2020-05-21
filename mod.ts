import {
    name_m,
    name_f,
    Discrete,
} from "./deps.ts"

console.log(
    new Discrete(<[string, number][]> name_m).rand(Math.random())
)
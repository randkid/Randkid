import {shuffle} from "./src/shuffle.ts"
import name from "./Collection/name/mod.ts"

console.log(name, name.rand(0.123))
console.log(shuffle(Math.floor(Math.random() * (2**53-1)))(0.238))
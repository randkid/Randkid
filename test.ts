import { weightedList } from "./mod.ts"
import { Nominal } from "./material/Material.ts"

console.log((await weightedList("./bloodType.csv")).rand(Math.random()))

console.log(new Nominal({
    inputMaterials: [await weightedList("./bloodType.csv")],
    rand: (seed, bloodType) => bloodType
}).rand(Math.random()))
import { nominal } from "./mod.ts"
import { Nominal } from "./material/Material.ts"

console.log((await nominal("./bloodType.csv")).rand(Math.random()))

console.log(new Nominal({
    inputMaterials: [await nominal("./bloodType.csv")],
    rand: (seed, bloodType) => bloodType
}).rand(Math.random()))
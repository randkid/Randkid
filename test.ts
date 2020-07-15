import { nominalCSV } from "./mod.ts"
import { Nominal } from "./material/Material.ts"

console.log((await nominalCSV("./bloodType.csv")).rand(Math.random()))

console.log(new Nominal({
    inputMaterials: [await nominalCSV("./bloodType.csv")],
    rand: (seed, bloodType) => bloodType
}).rand(Math.random()))
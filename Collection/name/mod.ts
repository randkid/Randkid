import {weightedList} from "./deps.ts"
import {Nominal} from "../../mod.ts"
import gender from "../gender/mod.ts"

import f from "./f.js"
import m from "./m.js"

const data = {
    f: weightedList.getMaterial(f), 
    m: weightedList.getMaterial(m)
}

export default new Nominal({
    inputMaterials: [gender],
    rand: (seed, gender) => {
        return data[gender as "f" | "m"].rand(seed)
    },
    categories: f.categories.concat(m.categories)
})
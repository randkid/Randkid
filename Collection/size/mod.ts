import { PCA } from "https://raw.githubusercontent.com/gnlow/deno-pca/master/mod.ts"
import { NumericalTuple, tuple } from "../../mod.ts"
import birthdate from "../birthdate/mod.ts"
import gender from "../gender/mod.ts"
import { gaussian } from "https://deno.land/x/gaussian/mod.ts"
import { hash } from "https://raw.githubusercontent.com/gnlow/planter/master/mod.ts"
import f from "./src/f_model.js"
import m from "./src/m_model.js"

export default new NumericalTuple({
    inputMaterials: tuple([birthdate, gender]),
    ranges: [],
    rand(seed, birthDateVal, genderVal) {
        const date = new Date(birthDateVal)
        const models = genderVal == "f" ? f : m
        const pca = PCA.load(models[2013 - date.getFullYear()].model)
        const randomized = pca.getStandardDeviations().splice(0, 5)
            .map((σ: number, i: number) => 
                gaussian(0, σ**2).ppf(hash(seed, i))
            )
        return Array.from(pca.invert([randomized]).data[0]) as number[]
    }
})
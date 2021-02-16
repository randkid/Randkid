import { Numerical } from "../../src/mod.ts"

const start = (new Date("2000-01-01")).getTime()
const end = (new Date("2010-12-31")).getTime()

export default new Numerical({
    inputMaterials: [] as any[],
    range: [start, end],
    rand(seed) {
        return Math.round(seed * (end - start) + start)
    }
})

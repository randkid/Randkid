import { PCA } from "https://raw.githubusercontent.com/gnlow/deno-pca/master/mod.ts"
import f from "./f.js"
import m from "./m.js"

const groupByAge = (arr: number[][]) => {
    let groups: {age: number, data: number[][]}[] = []
    arr.forEach(([age, ...value], i, l) => {
        if (l[i-1]?.[0] != age) {
            groups.push({
                age,
                data: []
            })
        }
        groups[groups.length - 1].data.push(value)
    })
    return groups
}
const getModel = (data: number[][]) => {
    const pca = new PCA(data)
    return pca.toJSON()
}
const writeFile = async (fileName: string, data: number[][]) => {
    await Deno.writeTextFile(fileName, `export default ${
        JSON.stringify(groupByAge(data).map(({age, data}) => ({age, model: getModel(data)})))
    }`)
}

await Promise.all([
    writeFile("f_model.js", f.data),
    writeFile("m_model.js", m.data),
])
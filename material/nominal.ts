import read from "./read.ts"
import process from "./process.ts"
import { Material, Nominal } from "./Material.ts"

export default read(async CSV => {
    const categories: string[] = []
    const freqAccList: number[] = []
    let freqAcc = 0

    CSV[Symbol.asyncIterator]().next() // Skip column names

    await process(
        () => {},
        [
            category => {
                categories.push(category)
            },
            freq => {
                freqAccList.push(freqAcc += Number(freq))
            },
        ]
    )(CSV)
    
    const material = new Nominal({
        inputMaterials: [],
        rand(seed){
            const range = freqAcc
            let i = 0
            while(freqAccList[i] < seed * range) {
                i++
            }
            return categories[i]
        },
        categories
    })
    return material
})
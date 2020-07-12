import read from "./read.ts"

export default read(async CSV => {
    const result: string[][] = [];

    CSV[Symbol.asyncIterator]().next() // Skip column names

    for await (const row of CSV) {
        result.push([])
        for await (const cell of row) {
            result[result.length - 1].push(cell.trim())
        }
    }
    return result
})
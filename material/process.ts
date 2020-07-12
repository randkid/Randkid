export default (eachRow: () => void, eachCell: Iterable<(cell: string) => void>) => async (csvIterable: AsyncIterable<AsyncIterable<string>>) => {
    for await (const row of csvIterable) {
        eachRow()
        const eachCellIterator = eachCell[Symbol.iterator]()
        for await (const cell of row) {
            eachCellIterator
                .next()
                .value(cell.trim())
        }
    }
}
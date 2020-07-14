type MaterialOutputs<T extends Material<any, any>[]> = {
    [K in keyof T]: K extends number ? ReturnType<T[K]["rand"]> : any
}

interface Arg<T, I> {
    inputMaterials?: I
    rand: (seed: number) => T

    categories?: Iterable<T>
    range?: [number, number] | Record<string, [number, number]>
}
export class Material<T, I extends Material<any, any>[]> {
    inputMaterials?: I
    get input(){
        return <MaterialOutputs<I>> this.inputMaterials?.map(material => material.rand(0))
    }
    rand: (seed: number) => T

    categories?: Iterable<T>
    range?: [number, number] | Record<string, [number, number]>

    constructor({inputMaterials, rand, categories, range}: Arg<T, I>){
        this.inputMaterials = inputMaterials
        this.rand = rand

        this.categories = categories
        this.range = range
    }
}

export class Categorical<T> extends Material<T, any> {
    categories: Iterable<T> = []
    constructor(args: Arg<T, any>){
        super(args)
    }
}
export class Nominal extends Categorical<string> {
    constructor(args: Arg<string, any>){
        super(args)
    }
}

export class Numerical extends Material<number, any> {
    range: [number, number] = [0, 0]
    constructor(args: Arg<number, any>){
        super(args)
    }
}

export class ComplexNumerical extends Material<Record<string, number>, any> {
    range: Record<string, [number, number]> = {}
    constructor(args: Arg<Record<string, number>, any>){
        super(args)
    }
}
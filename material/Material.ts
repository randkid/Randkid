import planter from "https://raw.githubusercontent.com/gnlow/planter/master/mod.ts"

type MaterialOutputs<T extends Material<any, any[]>[]> = {
    [K in keyof T]: T[K] extends T[number] ? ReturnType<T[K]["rand"]> : any
}
export interface DefaultArg<T, I extends Material<any, any[]>[]> {
    inputMaterials: I
    rand: (seed: number, ...inputValues: MaterialOutputs<I>) => T
}
export default class Material<T, I extends Material<any, any[]>[]> {
    inputMaterials: I
    _rand: (seed: number, ...inputValues: MaterialOutputs<I>) => T

    constructor({inputMaterials, rand}: DefaultArg<T, I>){
        this.inputMaterials = inputMaterials
        this._rand = rand
    }
    rand(seed: number): T {
        const plant = planter(seed)
        return this._rand(
            seed, 
            ...this.inputMaterials.map((material, index) => material.rand(plant[index])) as any // should fixed
        )
    }
}
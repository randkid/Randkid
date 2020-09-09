import {hash} from "https://raw.githubusercontent.com/gnlow/planter/master/mod.ts"

type MaterialOutputs<T extends Material<any, any[]>[]> = {
    [K in keyof T]: T[K] extends T[number] ? ReturnType<T[K]["rand"]> : any
}
export interface Arg<T, I extends Material<any, any[]>[]> {
    inputMaterials: I
    rand: (seed: number, ...inputValues: MaterialOutputs<I>) => T
}
export default class Material<T, I extends Material<any, any[]>[]> {
    inputMaterials: I
    _rand: (seed: number, ...inputValues: MaterialOutputs<I>) => T
    private uniqueKey: number
    constructor({inputMaterials, rand}: Arg<T, I>){
        this.inputMaterials = inputMaterials
        this._rand = rand
        this.uniqueKey = Math.random()
    }
    rand(seed: number): T {
        return this._rand(
            hash(seed, this.uniqueKey), 
            ...this.inputMaterials.map((material, index) => material.rand(seed)) as any // should fixed
        )
    }
}
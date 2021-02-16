import { shuffle, randKey } from "../shuffle.ts"

type MaterialOutputs<T extends Material<any, any[]>[]> = {
    [K in keyof T]: T[K] extends T[number] ? ReturnType<T[K]["rand"]> : any
}
export interface Arg<T, I extends Material<any, any[]>[]> {
    inputMaterials: I
    rand: (seed: number, ...inputValues: MaterialOutputs<I>) => T
}
export default class Material<T, I extends Material<any, any[]>[]> {
    inputMaterials
    _rand
    private uniqueKey: number
    constructor({inputMaterials, rand}: Arg<T, I>){
        this.inputMaterials = inputMaterials
        this._rand = rand
        this.uniqueKey = randKey()
    }
    rand(seed: number): T {
        return this._rand(
            shuffle(this.uniqueKey)(seed), 
            ...this.inputMaterials.map((material, index) => material.rand(seed)) as any // should fixed
        )
    }
}
import Material, {Arg as MaterialArg} from "./Material.ts"

export interface Arg<T extends number[], I extends Material<any, any[]>[]> extends MaterialArg<T, I> {
    ranges: [number, number][]
}

export default class NumericalTuple<T extends number[], I extends Material<any, any[]>[]> extends Material<T, I> {
    ranges: [number, number][]
    constructor({inputMaterials, rand, ranges}: Arg<T, I>){
        super({inputMaterials, rand})
        this.ranges = ranges
    }
}
import Material, {Arg as MaterialArg} from "./Material.ts"

export interface Arg<T, I extends Material<any, any[]>[]> extends MaterialArg<T, I> {
    ranges: Record<string, [number, number]>
}

export default class ComplexNumerical<T, I extends Material<any, any[]>[]> extends Material<T, I> {
    ranges: Record<string, [number, number]>
    constructor({inputMaterials, rand, ranges}: Arg<T, I>){
        super({inputMaterials, rand})
        this.ranges = ranges
    }
}
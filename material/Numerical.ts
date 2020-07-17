import Material, {Arg as MaterialArg} from "./Material.ts"

export interface Arg<T, I extends Material<any, any[]>[]> extends MaterialArg<T, I> {
    range: [number, number]
}

export default class Numerical<T, I extends Material<any, any[]>[]> extends Material<T, I> {
    range: [number, number]
    constructor({inputMaterials, rand, range}: Arg<T, I>){
        super({inputMaterials, rand})
        this.range = range
    }
}
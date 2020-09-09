import Material, {Arg as MaterialArg} from "./Material.ts"

export interface Arg<T extends number, I extends Material<any, any[]>[]> extends MaterialArg<T, I> {
    range: [number, number]
}

export default class Numerical<T extends number, I extends Material<any, any[]>[]> extends Material<T, I> {
    range
    constructor({inputMaterials, rand, range}: Arg<T, I>){
        super({inputMaterials, rand})
        this.range = range
    }
}
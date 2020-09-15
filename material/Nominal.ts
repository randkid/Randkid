import Material from "./Material.ts"
import Categorical, {Arg as CategoricalArg} from "./Categorical.ts"

export interface Arg<T, I extends Material<any, any[]>[]> extends CategoricalArg<T, I> {
}

export default class Nominal<T, I extends Material<any, any[]>[]> extends Categorical<T, I> {
    constructor(args: Arg<T, I>){
        super(args)
    }
}
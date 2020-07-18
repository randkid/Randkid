import Material from "./Material.ts"
import Categorical, {Arg as CategoricalArg} from "./Categorical.ts"

export interface Arg<I extends Material<any, any[]>[]> extends CategoricalArg<string, I> {
}

export default class Nominal<I extends Material<any, any[]>[]> extends Categorical<string, I> {
    constructor(args: Arg<I>){
        super(args)
    }
}
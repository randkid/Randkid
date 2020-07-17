import Material, {DefaultArg} from "./Material.ts"

interface Arg<T, I extends Material<any, any[]>[]> extends DefaultArg<T, I> {
    categories: Iterable<T>
}

export default class Categorical<T, I extends Material<any, any[]>[]> extends Material<T, I> {
    categories: Iterable<T> = []
    constructor({inputMaterials, rand, categories}: Arg<T, I>){
        super({inputMaterials, rand})
        this.categories = categories
    }
}
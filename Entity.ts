import Attribute, { Realize } from "./Attribute.ts"

type Seeds<T extends symbol> = Record<T, Realize<T>>

export default class Entity {
    attributes: Attribute<any, any[]>[];
    seeds: Seeds<any> = {};
    // [attribute: symbol]: any
    constructor(...attributes: Attribute<any, any[]>[]) {
        this.attributes = attributes
        
        for(const attribute of attributes) {
            Object.defineProperty(this, attribute.result, {
                get: function(){
                    if(attribute.result in this.seeds) {
                        return this.seeds[attribute.result]
                    }else{
                        const inputValues = attribute.require.map(
                            requireAttrSymbol =>
                                this[requireAttrSymbol]
                        )
                        return this.seeds[attribute.result] = attribute.gen(Math.random(), ...inputValues)
                    }
                }
            })
        }
    }
}
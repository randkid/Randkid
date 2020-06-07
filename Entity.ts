import Attribute from "./Attribute.ts"

class Entity {
    attributes: Attribute<any, any>[]
    constructor(...attributes: Attribute<any, any>[]){
        this.attributes = attributes
    }
}
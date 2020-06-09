import type Attribute from "./Attribute.ts"

export default class Entity {
    attributesMap: Map<symbol, Attribute<any, any[]>> = new Map;
    seedMap: Map<symbol, number> = new Map;

    constructor(...attributes: Attribute<any, any[]>[]){
        attributes.forEach(
            attribute => this.attributesMap.set(attribute.result, attribute)
        )
    }
    get(key: symbol){
        const attribute = this.attributesMap.get(key)
        const requireValues: any[] = attribute?.require.map(
            requireSymbol => this.get(requireSymbol)
        ) || []
        if( !this.seedMap.get(key) ){
            this.seedMap.set(key, Math.random())
        }
        return attribute?.gen(this.seedMap.get(key) as number, ...requireValues)
    }
}
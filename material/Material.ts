export interface Material<T> {
    rand(): T
}
export interface Categorical<T> extends Material<T> {
    categories: Iterable<T>
}
export interface Numerical extends Material<number> {
    range: [number, number]
}
export interface ComplexNumerical extends Material<Record<string, number>> {
    range: Record<string, [number, number]>
}
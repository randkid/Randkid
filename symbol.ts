export const gender = Symbol("Gender")
export const name = Symbol("Name")

export default interface Kid {
    [gender]: "m" | "f",
    [name]: string,
}
/*
    Meaningless function to infer tuple type
    https://github.com/microsoft/TypeScript/issues/22679#issuecomment-373973053
*/

export default <T extends any[] & {"0": any}>(array: T) => array
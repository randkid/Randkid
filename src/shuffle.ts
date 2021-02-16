// https://github.com/gnlow/idea/issues/49
// key: 53bit XOR mask
// seed: number between 0 and 1.
export const shuffle = 
    (key: number) =>
    (seed: number) => {
        const intSeed = Math.floor(seed * Number.MAX_SAFE_INTEGER)
        return Number(BigInt(intSeed) ^ BigInt(key))
        /
        Number.MAX_SAFE_INTEGER
    }
export const unshuffle = shuffle

/**
 * Generate random 53bit XOR mask.
 */
export function randKey() {
    return Math.floor(Math.random() * (2**53-1))
}
/**
 * Pair class which models a {key, value} pair for a Map Class.
 *  
 */
export default function Pair(K, V) {
    let KEY = K;
    let VALUE = V;

    const key = () => KEY;
    const value = () => VALUE;

    return {key, value}
}
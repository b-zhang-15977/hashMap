import Pair from "./Pair";

/**
 * hashMap should be an object which implements a Map data structure with hashing
 */

export default function hashMap() {
    /** 
     * Class Variables:
     *  loadFactor - ratio of the number of elements stored in the map to the number of 
     *               available buckets
     *  capacity - number of buckets
     *  size - number of elements
     *  hashMap - stores the key, value pairs
     * 
    */
    let loadFactor = .75;
    let capacity = 16;
    let size = 0;
    let hashMap = Array.from({length: capacity}, () => []);

    /*
     * Class methods
     */

    /*
     * Produces a haseCode from key.
     */
    const hash = (key) => { 
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;        
    }

    /*
     * Create a new key, value pair and adds it to the map.
     */
    const set = (key, value) => { 
        const bucket = hashMap[hash(key)];
        const index = bucket.findIndex(key);

        // replaces pair if pair already exists, otherwise adds it to bucket
        if (index > 0) {
            bucket[index] = Pair(key, value);
        } else {
            const pair = Pair(key, value);
            bucket.push(pair);
            size++;
        }

        // resizes hashMap if the load factor reaches .75
        if ((size / capacity) > loadFactor) {
            capacity = capacity * 2;
            let temp = Array.from({length: capacity}, () => []);

            for (const bucket of hashMap) {
                for (const pair of bucket) {
                    const newIndex = hash(pair.key());
                    temp[newIndex].push(pair);
                }
            }

            hashMap = temp;
        }
    }
 
    /*
     *  Takes one argument as a key and returns the value that is assigned to this key. 
     *  If a key is not found, return null
     */
    const get = (key) => { }

    /*
     *  Takes a key as an argument and returns true or false based on whether or not the key 
     *  is in the hash map.
     */
    const has = (key) => { }

    /*
     *  Takes a key as an argument. If the given key is in the hash map, it should remove the
     *  entry with that key and return true. If the key isn’t in the hash map, it should 
     *  return false.
     */
    const remove = (key) => { }

    /*
     *  returns the number of stored keys in the hash map.
     */    
    const length = () => { }

    /*
     *  removes all entries in the hash map.
     */
    const clear = () => { }

    /*
     * returns an array containing all the keys inside the hash map.
     */
    const keys = () => { }
    
    /*
     *  returns an array containing all the values.
     */
    const values = () => { }

    /*
     * returns an array that contains each key, value pair.
     */
    const entries = () => { }

    return {hash, set, get, has, remove, length, clear, keys, values, entries}
}
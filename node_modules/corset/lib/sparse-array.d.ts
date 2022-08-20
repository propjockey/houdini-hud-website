/**
 * @template {string | null} K
 * @extends {Array}
 */
export class SparseArray<K extends string | null> extends Array<any> {
    /**
     *
     * @param {number} len
     */
    constructor(len: number);
    numberOfValues: number;
    /**
     *
     * @param {number} index
     * @returns
     */
    empty(index: number): boolean;
    /**
     * @returns {boolean}
     */
    full(): boolean;
    /**
     *
     * @param {number} index
     * @param {any} item
     */
    set(index: number, item: any): void;
}

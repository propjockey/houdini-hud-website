export const getKeySymbol: unique symbol;
/**
 * @typedef {import('./sheet').Root} Root
 */
export class Store extends Map<any, any> {
    /**
     *
     * @param {Root} root
     */
    constructor(root: Root, updateMount?: boolean);
    /** @type {Root} */
    root: Root;
    /**
     *
     * @param {any} key
     * @returns {any}
     */
    [getKeySymbol](key: any): any;
    #private;
}
export function storePropName(storeName: string): string;
export function storeDataName(storeName: string): string;
export function storeDataPropName(storeName: string): string;
export type Root = import('./sheet').Root;
